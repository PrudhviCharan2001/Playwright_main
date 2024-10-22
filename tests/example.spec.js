import { test } from "@playwright/test";
test.describe.configure({ mode: "parallel" });
test("test1", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test2", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test3", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test4", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test5", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test6", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test7", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test8", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test9", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
test("test10", async ({ page }) => {
  await page.goto("https://app3.use.rsign.com/");
  await page.getByRole("button", { name: "Single Sign-on (SSO)" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Microsoft" }).click();
  const page1 = await page1Promise;
  await page1
    .getByLabel("Enter your email, phone, or")
    .fill("prudhvi.vu@rpostlabs.com");
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.locator("#i0118").fill("Charan@2001");
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();
  await page.waitForLoadState();
  await page.locator("//*[@class='send']").click();
  await page.locator("//*[@id='step1DraftButton']").click();
});
