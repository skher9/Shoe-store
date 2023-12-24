import {BUY_SHOE, ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "./shoeTypes";

const initialState = {
    products: [
      {
        category: 'Women',
        brands : [
          {
            brandName : 'Nike',
            items:[
              {
                id:1,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:2,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              },
              {
                id:3,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:4,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              }
            ]
          }
        ]
      },
      {
        category: 'Men',
        brands : [
          {
            brandName : 'Nike',
            items:[
              {
                id:1,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:2,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              },
              {
                id:3,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:4,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              }
            ]
          }
        ]
      },
      {
        category: 'Kids',
        brands : [
          {
            brandName : 'Nike',
            items:[
              {
                id:1,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:2,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              },
              {
                id:3,
                name:"Nike Air Force 1 '07 NN",
                price:9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"]
              },
              {
                id:4,
                name: "Nike Air Force 1 '07 NN",
                price: 9695,
                sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
                images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25e3d9ae-065f-466c-a45b-819e3a173aaf/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a13cb71-3832-41aa-a163-b1ddafe81dde/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-nn-shoes-nCJ6Wb.png"]

              }
            ]
          }
        ]
      }
    ],
    cart: [],
    wishlist: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
  
      case ADD_TO_WISHLIST:
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
  
      case REMOVE_FROM_WISHLIST:
        return {
          ...state,
          wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  