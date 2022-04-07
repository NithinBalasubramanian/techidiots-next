const siteUrl = "https://www.techidiots.tech";

module.exports = {
    siteUrl,
    generateRobotsTxt : true,
    robotsTxtOptions :{
        additionalSitemaps : [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`
        ]
    },
    exclude : ['/keypad','/about']
}
