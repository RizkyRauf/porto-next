export const clients = [...new Array(5)].map((client, index) => ({
    href: `/${index + 1}.svg`,
}))