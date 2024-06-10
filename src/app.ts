import puppeteer, { Browser, Page } from 'puppeteer';
import { getDescription, getGender, getLaunch, getTitles } from './utils/getItens';
import sendEmail from './utils/sendEmail';

export interface IMovieInterface {
    title: string
    launch: string
    gender: string
    description: string
}

export const webScraping = async () => {
    const browser: Browser = await puppeteer.launch({ headless: true });

    const page: Page = await browser.newPage();

    await page.goto('https://www.adorocinema.com/filmes/numero-cinemas/');

    await page.setViewport({ width: 1080, height: 1024 });

    const title: string[] = await getTitles(page)
    const launchs: string[] = await getLaunch(page)
    const genders: string[] = await getGender(page)
    const descriptions: string[] = await getDescription(page)

    const movies: IMovieInterface[] = title.map((title, i) => ({
        title,
        launch: launchs[i],
        gender: genders[i],
        description: descriptions[i]
    })).slice(0, -6)

    await browser.close();
    sendEmail(movies)
};

webScraping()