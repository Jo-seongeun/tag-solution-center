function parseCookies(header) {
    const list = {};
    if (!header) return list;
    header.split(';').forEach(cookie => {
        const parts = cookie.split('=');
        const key = parts.shift().trim();
        const value = decodeURIComponent(parts.join('='));
        list[key] = value;
    });
    return list;
}

async function runReport(accessToken, propertyId, body) {
    const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error?.message || 'report_failed');
    }
    return data;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'method_not_allowed' });
        return;
    }

    const cookies = parseCookies(req.headers.cookie);
    const accessToken = cookies.ga4_access_token;
    if (!accessToken) {
        res.status(401).json({ error: 'not_authenticated' });
        return;
    }

    const { propertyId, startDate, endDate } = req.body || {};
    if (!propertyId || !startDate || !endDate) {
        res.status(400).json({ error: 'missing_params' });
        return;
    }

    try {
        const dateRanges = [{ startDate, endDate }];

        const metricsReport = await runReport(accessToken, propertyId, {
            dateRanges,
            metrics: [
                { name: 'totalUsers' },
                { name: 'newUsers' },
                { name: 'sessions' },
                { name: 'screenPageViews' },
                { name: 'engagementRate' },
                { name: 'bounceRate' },
                { name: 'screenPageViewsPerSession' },
                { name: 'averageSessionDuration' }
            ]
        });

        const trendReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'date' }],
            metrics: [{ name: 'totalUsers' }, { name: 'sessions' }]
        });

        const deviceReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'deviceCategory' }],
            metrics: [{ name: 'totalUsers' }],
            orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }]
        });

        const browserReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'browser' }],
            metrics: [{ name: 'sessions' }],
            orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
            limit: 10
        });

        const channelReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'sessionDefaultChannelGroup' }],
            metrics: [{ name: 'sessions' }],
            orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
            limit: 10
        });

        const eventReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'eventName' }],
            metrics: [{ name: 'eventCount' }],
            orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
            limit: 10
        });

        const pageReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'pagePath' }],
            metrics: [{ name: 'screenPageViews' }],
            orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
            limit: 10
        });

        const geoReport = await runReport(accessToken, propertyId, {
            dateRanges,
            dimensions: [{ name: 'country' }],
            metrics: [{ name: 'totalUsers' }],
            orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }],
            limit: 10
        });

        res.status(200).json({
            metricsReport,
            trendReport,
            deviceReport,
            browserReport,
            channelReport,
            eventReport,
            pageReport,
            geoReport
        });
    } catch (error) {
        res.status(500).json({ error: error.message || 'report_failed' });
    }
}
