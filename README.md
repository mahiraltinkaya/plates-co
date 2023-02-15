# Plates CO.

## Install Dev Mode

```sh
git clone git@github.com:mahiraltinkaya/plates-co.git
cd plates-co
npm install
npm run start
```

## Install Production Mode

```sh
git clone git@github.com:mahiraltinkaya/plates-co.git
cd plates-co
npm install -g serve
npm run build
npm run start
```

## Description

- Multiple product stack in cart.
- Product deletable in the cart.
- Persistend Cart.
- There wasn't use any UI library. (Created own scss UI kit like bootstrap. There are lots of preferences as Card,IconButton, pa, ma, container and grid cunstrunctures.)
- UI desinged basically.
- Cart total, delivery and discount was calculated by custom hook.
- Products, Campaigns and Delivery Rules are simulated by @constants file like a backend response.
- In the case study used @react/toolkit library for state management.
- Live link : <https://splendorous-douhua-92f62d.netlify.app/>
