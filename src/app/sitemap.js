export default function sitemap() {
const baseUrl = "https://brandscaremedia.com";

return [
{
url: `${baseUrl}/`,
changeFrequency: "weekly",
priority: 1,
},
{
url: `${baseUrl}/about`,
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/Profile`,
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/Ourservice`,
changeFrequency: "weekly",
priority: 0.9,
},
{
url: `${baseUrl}/Contact-Us`,
changeFrequency: "monthly",
priority: 0.7,
},
];
}
