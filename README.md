# Workshop

This workshop is about implementing ngrx in an existing angular app. We will add ngrx, replace existing code with ngrx ones and add some missing unit tests.

## Workspace

This project is an nx workspace with the minimal code to manage a product list.
You can view each products, edit, delete or create new ones.

## Backend

The backend app is a nestjs app which saves data in memory. The code is located in `apps/backend`.
It can be launcher with the command :
```shell
yarn serve:backend
```

## Frontend

The frontend app is an angular app. The shell is located in `apps/frontend` and the code for the product feature is located in `libs/products`.
It can be launched with the command :
```shell
yarn serve:frontend
```

## Shared

There is also a shared library between the frontend and the backend in `libs/shared`. It contains model definition for products.

# Test

You can run unit test with
```shell
yarn test:frontend
```
or in watch mode :
```shell
yarn test:frontend:watch
```

# Steps

Every action you will have to do will be put in:
> blockquotes like this

Some code will be in spoiler like this
<details>
  <summary>View solution</summary>

  Are you starting to cheat already? Meh!
</details>

You can start the workshop [here](/steps/1.MD)
