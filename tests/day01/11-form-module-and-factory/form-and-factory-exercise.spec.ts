// let's create my-first-factory.ts file in the src/utils
// it should export a function factoryPracticeForm that create a new object with the required properties from this form:
// https://demoqa.com/automation-practice-form
import { test } from "@playwright/test";

// import {factoryPracticeForm} from "@/utils/my-first-factory";

test("Fill the form using our factory and check it's values", async ({
  page,
}) => {
  await page.goto("https://demoqa.com/automation-practice-form");
});
