import { Account } from "../account";

it("create account", () => {
  const account = Account.create({
    currency: "US",
    initialBalance: 0,
    name: "Account name",
    ownerId: "123",
  });
  expect(account.getBalance()).toEqual(0);
  expect(account.getInitialBalance()).toEqual(0);
  expect(account.getCurrency()).toEqual("US");
  expect(account.getName()).toEqual("Account name");
});

it("should build an account", () => {
  const account = Account.build({
    balance: 20,
    id: "123",
    currency: "US",
    initialBalance: 0,
    name: "Account name",
    ownerId: "123",
  });
  expect(account.getBalance()).toEqual(20);
  expect(account.getInitialBalance()).toEqual(0);
  expect(account.getCurrency()).toEqual("US");
  expect(account.getName()).toEqual("Account name");
});
