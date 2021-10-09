const siteUrl = "https://www.techidiots.in";

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