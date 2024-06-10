import { Page } from "puppeteer";
import { Genres } from "./filmGenres";

export async function getTitle(page: Page): Promise<string[]> {
    return await page.$$eval("a.meta-title-link", titles => {
        return titles.map(title => title.textContent)
    });
}

export async function getLaunch(page: Page): Promise<string[]> {
    return await page.$$eval("span.date", launchs => {
        return launchs.map(launch => launch.textContent)
    })
}

export async function getGender(page: Page): Promise<string[]> {
    const allAWithClassxXx: string[] = await page.$$eval("div.meta-body-item > a.xXx", genres => {
        return genres.map((gender) => gender.textContent)
    })
    return allAWithClassxXx.filter((gender) => Genres.includes(gender))
}

export async function getDescription(page: Page): Promise<string[]> {
    return await page.$$eval("div.content-txt", descriptions => {
        return descriptions.map(description => description.textContent.replace(/\n/g, ""))
    })
}