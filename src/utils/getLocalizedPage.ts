
import { getCollection, render } from 'astro:content';
export async function getLocalPage(page: string) {
    const allPages = await getCollection("page");

    const locales = allPages.filter(name => name.id.startsWith(page))
    return locales.map(locale => ({
        params: {locale: locale.id.slice(-2) },
        props: {post: locale}
    }))
}