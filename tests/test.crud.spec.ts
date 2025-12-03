import {test, expect} from '@playwright/test';

test('test sign in page', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@testing.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('tukiem');
    await page.getByPlaceholder('Last Name').fill('zupazupa');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('tukiem123');
    await page.click('#submit');
    expect (await expect(page.locator('p', { hasText: 'Click on any contact to view the Contact Details'})).toBeVisible());
    expect (await expect(page.getByRole('heading', { level: 1 })).toHaveText('Contact List')); //Click on any contact to view the Contact Details
    expect (await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible());
    expect (await expect(page.getByRole('button', { name: 'Add a New Contact' })).toBeVisible());
});


test('test add new contact', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@hallow.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('muma');
    await page.getByPlaceholder('Last Name').fill('palozz');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    await page.click("#add-contact");
    await page.getByPlaceholder('First Name').fill('Jujun');
    await page.getByPlaceholder('Last Name').fill('Manua');
    await page.click("#submit");

    expect (await expect(page.locator('td', { hasText: 'Jujun Manua'})).toBeVisible());
});

test('test add new contact without input last name', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@ymail.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('muma');
    await page.getByPlaceholder('Last Name').fill('palozz');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    await page.click("#add-contact");
    await page.getByPlaceholder('First Name').fill('Jujun');
    await page.getByPlaceholder('Last Name').fill('');
    await page.click("#submit");

    expect (await expect(page.locator('span', { hasText: 'Contact validation failed: lastName: Path `lastName` is required.'})).toBeVisible());
});

test('test add new contact without input first name', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@gmail.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('muma');
    await page.getByPlaceholder('Last Name').fill('palozz');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    await page.click("#add-contact");
    await page.getByPlaceholder('First Name').fill('');
    await page.getByPlaceholder('Last Name').fill('Manua');
    await page.click("#submit");

    expect (await expect(page.locator('span', { hasText: 'Contact validation failed: firstName: Path `firstName` is required.'})).toBeVisible());
});


test('test sign up empty first name', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@bubun.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('');
    await page.getByPlaceholder('Last Name').fill('palozz');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    expect (await expect(page.locator('span', { hasText: 'User validation failed: firstName: Path `firstName` is required.'})).toBeVisible());
});

test('test sign up empty last name', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@zipo.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('buba');
    await page.getByPlaceholder('Last Name').fill('');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    expect (await expect(page.locator('span', { hasText: 'User validation failed: lastName: Path `lastName` is required.'})).toBeVisible());
});

test('test sign up empty email', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@wiwik.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('buba');
    await page.getByPlaceholder('Last Name').fill('wiwil');
    await page.getByPlaceholder('email').fill('');
    await page.getByPlaceholder('password').fill('hacky123');
    await page.click('#submit');

    expect (await expect(page.locator('span', { hasText: 'User validation failed: email: Email is invalid'})).toBeVisible());
});


test('sign up empty password', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@wiwik.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#signup');
    await page.getByPlaceholder('First Name').fill('buba');
    await page.getByPlaceholder('Last Name').fill('wiwil');
    await page.getByPlaceholder('email').fill(formatted);
    await page.getByPlaceholder('password').fill('');
    await page.click('#submit');

    expect (await expect(page.locator('span', { hasText: 'User validation failed: password: Path `password` is required.'})).toBeVisible());
});


test('sign in empty username and password', async({page})=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`+'@wiwik.com';

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.click('#submit');

    expect (await expect(page.locator('span', { hasText: 'Incorrect username or password'})).toBeVisible());
});
