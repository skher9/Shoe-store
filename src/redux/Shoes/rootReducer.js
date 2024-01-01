import { ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST, MOVE_TO_WISHLIST, MOVE_TO_CART, } from "./shoeTypes";

const initialState = {

  category:[{
  title:"Men",
  type:"Men",
  id:"id-men",
  src:"https://t4.ftcdn.net/jpg/06/06/13/09/240_F_606130950_ZFeY1xVaihITh5D04HRIcGZdUVlPOnK7.jpg",
},
{
  title:"Women",
  type:"Women",
  id:"id-women",
  src:"https://t3.ftcdn.net/jpg/06/12/77/54/240_F_612775466_5uk4TMTc2C3On01NJAc1ut6YfeKIe4rm.jpg",
},
{
  title:"Women",
  type:"Women",
  id:"id-women",
  src:"https://t4.ftcdn.net/jpg/05/14/05/89/240_F_514058939_1lGwoKXUCWrT37c5iYnOAxGx7TsuycAS.jpg",
}
  ],

  brands:[
    {
      title:"Adidas",
      type:"Brand",
      id: "Adidas-id",
      src:"https://t3.ftcdn.net/jpg/04/57/14/40/240_F_457144059_mEKNeZzEmyjelNuW02BBbsE0SpvAAeOi.jpg"
    },
    {
      title:"Nike",
      type:"Brand",
      id: "Nike-id",
      src:"https://www.shutterstock.com/image-illustration/nike-logo-photography-editing-260nw-2313281829.jpg"
    },
    {
      title:"Bata",
      type:"Brand",
      id: "Bata-id",
      src:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/5623/brand.gif?itok=egkyJ-6r"
    },
    {
      title:"Reebok",
      type:"Brand",
      id: "Reebok-id",
      src:"data:image/png;base64,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",
    },
    {
      title:"Fila",
      type:"Brand",
      id: "Fila-id",
      src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAnFBMVEUfNVz////tHCQAJVOgprP9GBtsboUAKlhXMlSxKD4LNV7x8vMNKFTa3OJgaoIWL1hGU3EAAEKssbwAFEsAIFDf4eUAAEUAGEwRLFf4+fqZn61WY3yBiZoAG00AAD/m6Ou+wcrQ09mRl6ZQW3YAACxKMlZlMFHxGx+mKUEpPGFfMFKdKUJ3fpK9JDkAD0nPIjOBLEoAADU1Rmg+RGDVZxvTAAAC80lEQVR4nO3Xa3uaMACG4SDUbRANIJSAyMmuLRu1Hfv//20iECnEybp4Xf3w3p8oVHwMhwAhAAAAAAAAAAAAAAAAAAAAAPCpmRLdJi9xkl27SO+TZMMu7cNzEofeIu371ynS5LFNnFppoTdJwT5LU5fo0n1QL87TbHuvvO3x6U7muYnLtEZWMkLj06K/lw0P3/unra7isTN/PC2k7n6atLJO36lVnNmrdtGV7aTsNmoFVxv3Im9bLJ5MGnXfaTC+7BZze3raHfr/09K90jrz9cLILe4IN7rvdBnt41bTOFZqgtoD+5c4c2Zckp/jtK3KoTPfLp1zLzPjgjgcxIW/FMYR8/l4ekniXsm8w8rrVBsyDkrrHp+/Tb2RmXHUfdemhVv5rfCjdfzLWDtFzInT1+8H7ng9k4vTyL+jB3s9RgIyL46V2ahNC4tAWdvO9q2JNKLz4mjVN6V5vySfRT6CrofX2uC85nPiWGn1H4g34rPSWeQjDrkmle7ZjLh7cVDz2inEh5eKhi5YaVLhml+P0/fi3yudMPE7V2rayObCyM2K88Qvy46XKF+KY2w4N43L6+uH9TzhW+vm5sbPt7xSySx2Ic5qThvxVCKP0/fiFudumhXcFiOZJ0rjwnzAKD1yLY4xcTWkXrtqMM0qudmJuOjBOWvfFWRxvh3oJx6JREkV8JYjen0V84SIi73JNlmclkWdTJz++UO9bdlGH2xVCqbYWXEZOcdNhb+L3O+I4DDafYq4qJKuvXGcPivOL8fPJaeRK6b7u1Xc4C4xVtmy2dm3FdzpRJzkBNb72dJlhEWSgja8lsUZm/9vI7t+FpBc+nTZHbCYE1ZPHtzaEdrqQT5d7SqZIVjZ7rqQnb+svZU1b/zHdwVDMkKr40M5t/3RWitial7CeFms0mwt3Rljy8zK45K1f9iVMVLVzcMRratosDKqbK7qSZ3RXeBd+qHc2523MaqPdBGMD7dQZWkAAAAAAAAAAAAAAAAAAAAAAADwef0BvhlEFaZJ+l8AAAAASUVORK5CYII="
    },
    {
      title:"Skertchers",
      type:"Brand",
      id: "Skertchers-id",
      src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACUCAMAAAC0q3V+AAAA51BMVEX///8HKEqxsbEIJ0oHKEj8//8IJ0z29va6urqsrKz///23t7cAACDW3uAAACYAAC2Bipfe3uAAFD7s7OwAACPk5OQAACkAADLAwMDU2uEAAAAAADXZ2dkAI0YzQmDGxsYAHUUAABzp8vGeq7TEztDk6u+mqbezvcYAFzy7u8LPz8+7v8wAABIqO1RsgJQXJkSJlp8oLEYAADsWMFQAEUA5UGpbZ3xDUWY9Rls1Nky5ydJMV2Zhbn4RLEYtNFFISlt1e4loeYEkI0JSY3EfOlosOkoREjU3RE8gJEwSHTZxdHqNmKzm+v9DfZbgAAANFUlEQVR4nO2bi3bauBaGZXwREMDGBhtiHESMY0NI4yQEUqAJ02ZmOu28//McXSxfgKRNpqv4rKVv2g74Iuu3pK2trQ0AAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKO1e0OBtPpcDjs9aonr1Ht7TCcTtsWPLaA14DQGgyrlVpGJaGgDH+rHCB3V29QUqHQag+TilaqPdyK0+lgMGhjuj+AXNPG106HvUqNCx52yycTdqcnNVq76nDQteC7aojfEyuFFFSZlk2lNWRtUOv91xFlTXkfr/VKpRJO2SCrVQ/2MTVo9vvjVW8ymfgXCZcJq/G4GRQLa1fKqBIOk0rtdjB17BuL5cPDx4+PNzf4z/U++PDjx4cvcT932zRVOfitOl7D4sOoWKVufNXSXRMhDyMRlAPgw/h05IzuA6Amd/KXho3y71dzmIMa4Wo90k0NS5Cln8P0ssbMOqz1+/UcwuJzXl7jYNOJcCPJFIl/eAmJXmGu085uVcvVX2E1acdpdkydfHK113Xto6HHVVpor1wih4nGk8zmqL6Ccr30lRYsiNTuQl5CJrJ7FFE7WHzqbmfHwk9ecbgpVKqmaSjDk7Wifs071JKlmEN4barZocEyKlqUW73RGTU6jm7PTY8z1zuulu/TGnpK58vuCZ8oj6Fpl8G+FYSGW5CoL+NVP4B7qH1Dz1tebb5Jy+BOTyl6K+9WtZzVGTqkG/LxaC7S5qnnYEcMN68Spb01Na6l8Hh4t6pklbEWppKJRJnGgsg6UFUV+B0zwz1TE+1pQ1bK0JC8NrUhF1kHY1uRU5GyHGYXF0SqROSJkScEiUg+82bFHpPUZ81Mq7ohTkA6e1yPQdo5sbDd/rpDcpQ35EkpGjJ1djKzE+iKnHZWSUbb/iv3U4h2NfnLSuUhgukP7vw9cBfzJBMZOwqeD1OVCnpYbA0jxvgJZJ0VUlarcRMSp1wlI5T03zYJKPRq1cFg2p4OyuG3tpN+Vc2q84ykgkiZTvweQlrG9fWd9lXTvn7GPD4u4ya+j4mEif9UppjAoLbXkjNJzovk3VZ6AVn20NxeNplK4gnvTUnHhovMXAE4+/m1Vcb8z3EiknsXeS/xyPAxmVsrjN6skOBuLcBEwsSWlWa1nHkm1WQM1cHCUX6saQ/03E9Ecme4LKvlXJiCN2UdtJcOws6AlEqlAQ6psKraF6mZYy6S+xflGZVpmCKbKdvfr2zdnWOTSiI4dIG1a4mS0E5epDLdFTk8nqpdpjy4n7mZMOj7xuL+2dM7o9PZbIRpdBoFdHNHJLpPuyt3osogEg4o05PagEX5Dwf1VQiDoNls9vOswq1XWFYr89TwgOr+uuZoDFn7vdf3ai5RTqRsTvgUwq1rGVaSWcwwa0DImpTzinms1+F2nuux0bK/M0+WIe6RmdVcQw7Wz2cZy/HLt9fr/YdcS8pRnPiu2ZAsQdyDv+90ggQkRqfn4lTzdfDSzXitAWMzb3Ye+onvmgV3jt9bD8Z+u0uU9UAFEX/0JdT4Om94kMFXIekCtXr83jpIN5BzA29ik8mQ61SuF2GQ1pSuk5MAVrDy13mNinf1L2CWFXQrpWlImDZkLj4B/zDZPJ+2D/r8eJXwSDa18F/M589fo7xllaTZiu/08JVWGeIeVu1Ab7XsxJfJWU1vH2nX2fH0OC1jsL8+PRrtQyKDlrwn8idA5od0xy59eWVYZ00Piey29lvyRyjy/DGuq7yzHtg6Oh4HRcKr6NAe64E911SiYpqLEHKjA3rlGZAgLzJXn/pENw9uJR/QiP8ve5GuLy6CvVLLMHsQ0jFZmELA5N62Te+HMj0PzW8dfb6M+5aa3pwa1pNyaARWqrFSWBCdj+Mvmk5WV3bL1u0EnX1qkTXWaDZruc/3mzjsFzN9rF652hHknYHCTjCLDatWezpercLQTwnD1eXlCi+yulAtFJQMR5juYpUoFpllZ/yKasEpzzXrHd/RycGTk4jKyuCdOWaAOHq42XmWYa8c+QE5uiRXMJFZ600HJEnQegMkbXAw7VUrLB+vUp22y9NTU2B32qskuZ5JmIensHKyT3lYMmg+XZRmHB5bz0tAq0uyN3sHtfwQlsA7IO1fwjYssp8M8BaOXXuB4EfwoNWvLvQnD/7nGhQzPOr8WP4kf3bxUn5/8XA9vezgA3bzSfbPpmvVnYe9U+ThVIedN5B8+Gl782Khb6jhC5e+U2Tfj40iFuCfYram8vHH7bYC4cXOlQZNoAjCuFBEBVppAeT2gJ+N/93uFhBbYPfx5OiKiAlqO6e2k/eIxP3CePDMArfPAXDYxwaL4/SdyBmtxwGw7l18FOH/OFETv4KnRy/KMPUYTJPTDZpEMn50k2/BKb4l/zB7a6mPc3MXdBOquNw7fvXcnM/xVafh+0SuXUR26DojuoOF11eN0w0MRhJNDfyTteNn5FyHpK82HRaT1JNtrtnp2gIfdLbdh0zdcVxdRygEBqKplLpBC4g1mlmpfwexTR6mIdch6I3RaQz6n+kGoTLHBXZakUy3Du0YxB1Pk2XJ6eiMVmMWtd/VXb+PZFKDRrY5oPabYGPS3Veb5GX17+3555hls2wdUh352ucXd9vAn7FVtbf8wFium8GTR5MnTOr1BQsaYfG8LnA8spuLXB5ZUIOAvhCMTQtVt/Raye6PR2SbVHb8rLLnA/gewwNdmsOCzrgHRIto/kU3mD0J1IPYMdGCZXmAwKZxEPSURZ9B8JdCoyfRl1yx/rVHSnAMemFN8UjoxI1B2KIFux946B3/SbZX0JVFLNz4gUQ/lfnGWtJcP+32vOBlvVkkLjOe0w1l74wP7YvLcxUYEd1lboVwsnQkxYGAJQ5+t+meepS+XPxgI4mDjZrpzIObzqSv7pnGKIMN3UDx7sbq31SP7KQhIlxozNL6XdaQsSmTbFpzsvqq0SHjcVMVhy/u0rwOfDDZvrk3p7i3rhurzQfSvLJ3tjLmc1x/PUkRhCaig+s6nFxeXobhpDYA3ScWHTILDal4dEgvaAJX/OyR0K5rwPAfFpc+G0/CyYQUAEFzTUV6io/LnPj00Zq56W4Ry1Pw5m6CvXnfkse/5tlWPA1Z0bdq7NHEJe9+6WgyE6CSecvvUJGS9HxH0NynAFwkca5WbsfP2uKeRvoaveyOKMYqPvXAJtlauntWyAlZ/4argGhigkyP3JHsb/x2onB8hvLZGDKuR7R+ZS/qlYb8FiXytDQTQvGDdSTRj54u0fEmmXQkqH9SOyyZNLbV6ejYJgQLRPaKlGiRcxTGnzwaxXRJHAybS1pV89v56hFRPW7LtjudVkdv4EmJ9WXJtFuRRDbrZW3euPNhjLTi7xrwM7bqC1mar4Ll5FLn6C8D0FNAOhv5fmvyvXOdZr/6kULq6H4YM3wjABVPofF3fZWVCg2dhWpjetmCZrbLdz4evvST6ZPDwyEuAKhhRNvK3I7Hazo9ya7RtKD6jXUiUk6i0rsKwXtE4mlLd5JZiJpDLNI430Q0z879EvSTDCZEBpy69kgnlGZ8/OMHWt9oPogSLXNGof0PM7cs+fk8onVHSzi8op/MTZD5bNbWoTFdLABsmMjbD+TE5GbEwqO6HjGRaPEOgYyAc4+orfgYTDyPqL0l5t/VEktxDkDlhtbdNdIsLgBClg2iuGmiMzbDsc7mzQtmkdmL8mKSbUqutakZS3z3cYs2lrnFqg3acWX0zEo65xi3tDGjy/foU/P+dhBRgzg34Nalap9JXdYsDUK5DgHc0N0ECaXZvnjqMhz2Ep7DgGVV9E8s65q2uLcOyAQBHfqevI+wf49oA2/SRocAP4z+so3+fMafkys1rYHvOs/F6K8Q1f7wrjVWN/Yn1Qmjt9Gx8ZHmV8HUSwbJORbpMxEK2oLwip5A9z6+vEpujIPu2mSegHR2T7hSRl/UuEMOybjpSKf0dTLY8cvDn2gDR9sweaZ/UW869GEeNVsh/cmGJjea8CIOJ7xusUO8L3S7AnX49iE50LGVcxj6HNck0h9XYKsTWyjfXZBLmi32qyW0xFMms06emwzi0z+A9cVJZpBkq9Z8CAKTuDeydsMa8lpjRixoPiReQ+K3Ok5nAjaORCYlRB2BscsGnxMGZ8RW2OQp2BvGpge5+BLY743fHFzyT1tYZauDrXmjg13j22XcB/GsRTz10Q01l3DWwJMAtvb2zV8NcmWnlWDPrs7r6nDtjshsktByQrg+xbe3WqMGGZHw26lNrm50/l2ftgp0Tg3wPanBjD6secqeMPujeTobkVmKLgJGo5ZzZYxVYPmG/2Z3gKSV5SE/alb5lz59Z/Xmi7S7QK0Dq10Eqm12tt2mItv8Ky+4cG36jTUQv6KrDnaK7ZLdUMsfvl1kvoMzW0f/LYRAXuNQKEJN4iCknMLJveKyEEcWJskiJvsxFpVsPZZuQ+IX88sjaAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCP6f+R/wNngP+KQBogAAAABJRU5ErkJggg==",
    },
    {
      title:"Vans",
      type:"Brand",
      id: "Vans-id",
      src:"data:image/png;base64,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",
    },
  ],

  products: [
    {
      id:1,
      brand:"Nike",
      name:"Nike Air Force 1 '07 NN",
      price:9695,
      sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
      images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16b86cb1-bfac-4b84-a94a-138ee181b17d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3de54d76-c7c8-42e9-9cc4-53bcf27b95ca/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239149f7-de6c-4565-acb4-81c48de25816/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20f3bef6-085a-4238-ae96-da5347c32c9e/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0cf9ce99-19de-499b-ae68-d31d3315fe4d/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f21f9106-dd43-43a4-86ad-00fd06175af8/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eaa7aea2-b7f8-46de-854f-565417b7c065/air-force-1-07-nn-shoes-nCJ6Wb.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93881c82-b771-42ee-84f6-456538385b61/air-force-1-07-nn-shoes-nCJ6Wb.png"],
      gender: "Women",
      inStock: true,
      reviews: "96",
      delivery: "in 2 days",
    },
    {
      id:2,
      name:"Nike Killshot 2",
      brand:"Nike",
      price:8595,
      sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
      images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0dcd0d7-ca8e-400a-b5c4-59c419dac14f/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/478a3836-b227-4fd8-b289-94a7f9150510/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/04fa01cd-e4c4-4054-be24-fbd1fb7deb29/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64184f56-e12f-4684-b492-2bf1b16d641b/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c52f3943-fbd8-4ded-9514-b33f1209569b/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b08f8a7-80d4-4a05-8c02-a5e836d221c2/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c73b9b6d-6bc1-4ed2-854e-158c63cb3fe2/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8c215a9-468a-4286-b8dd-4d0ae83fdc3c/killshot-2-shoes-CqGk4H.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85563b96-da74-4f99-8b54-4bd16dbbece5/killshot-2-shoes-CqGk4H.png"],
      gender: "Women",
      inStock: true,
      reviews: "96",
        delivery: "in 2 days",
    },
    {
      id:3,
      name:"Nike Air Max Excee",
      brand:"Nike",
      price:8695,
      sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
      images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f388e46e-181c-49e4-ad19-f06ff0f470f8/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/834bd42b-a3a1-432c-8c94-ee998a74cc50/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/09ea7131-27ca-4a60-9a19-5ed37049ad22/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0d59d60-3fab-458d-b330-2e2e42bd2c5d/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fda91bcd-370d-4c61-b10f-a44ab5b09389/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3ca6942-5309-4ba7-945e-b3b76ce9ceb9/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c26bb57-272d-4cd9-b9e5-cdaaef4aaf2b/air-max-excee-shoes-FWztdv.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab06a262-8caa-405b-b2e8-9725d6393f92/air-max-excee-shoes-FWztdv.png"],
      gender: "Women",
      inStock: true,
      reviews: "96",
        delivery: "in 2 days",
    },
    {
      id:4,
      name:"Nike Air Force 1 '07 NN",
      brand:"Nike",
      price:11895,
      sizes:["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "7.5"],
      images:["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4bc5cd7-37d2-42e2-9a5e-07232e76b9e1/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/039df0a1-386d-4855-a147-2d3f18fb3b14/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ed5ac8b-83f3-4269-b7ba-7724f8e28740/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db626c70-74fd-4169-99df-fc366a41d581/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/796d0a13-86b4-4b56-9a5c-168787d3c2da/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3212a70-0a23-401b-9802-3258dbde8f4f/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/618f770e-d2a9-4a72-826c-4768d9104209/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97779d4a-5e5e-487d-ba85-4efda643049e/air-max-90-shoes-PKcwg7.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/590afee4-10d8-406f-b6d3-b822305832c7/air-max-90-shoes-PKcwg7.png"],
      gender: "Women",
      inStock: true,
      reviews: "96",
        delivery: "in 2 days",
    },
   ],
    cart: [],
    wishlist: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const cartProductId = action.payload;
        const productToCart = state.products.find(product => product.id === cartProductId);

      return {
        ...state,
        cart: [...state.cart, productToCart],
      };
  
      case REMOVE_FROM_CART:
        const toRemoveFromCart = action.payload;
        const itemFromCart = state.cart.find(product => product.id === toRemoveFromCart);

      if(itemFromCart)
      {
        const updatedcart = state.cart.filter((item)=>item.id !== toRemoveFromCart)
        return{
          ...state,
          cart: updatedcart,
        }
      }
        return {
          ...state,
          
        };
  
      case ADD_TO_WISHLIST:

      const productId = action.payload;
      const favItem = state.wishlist.find(product => product.id === productId);

      if(favItem)
      {
        const updatedlist = state.wishlist.filter((item)=>item.id !== productId)
        return{
          ...state,
          wishlist: updatedlist,
        }
      }
      const productToAdd = state.products.find(product => product.id === productId);

      const updatedlist = productToAdd ? productToAdd : [];

      return {
        ...state,
        wishlist: [...state.wishlist, updatedlist],
      };
      
      case REMOVE_FROM_WISHLIST:
        const productToRemove = action.payload;
        const product = state.wishlist.find(product => product.id === productToRemove);

      if(product)
      {
        const updatedlist = state.wishlist.filter((item)=>item.id !== productToRemove)
        return{
          ...state,
          wishlist: updatedlist,
        }
      }
        return {
          ...state,
     
        };
  
      case MOVE_TO_WISHLIST:
        const productToMove = action.payload;
        const productToMoveToWishlist = state.cart.find(product => product.id === productToMove);

        if(productToMoveToWishlist)
        {
          const updatedlist = state.cart.filter((item)=>item.id !== productToMove)

          return{
            ...state,
            wishlist: [...state.wishlist,productToMoveToWishlist],
            cart: updatedlist,
          }
        }
        return {
          ...state,
          
        };

      case MOVE_TO_CART:
        const itemToMove = action.payload;
        const productToMoveToCart = state.wishlist.find(product => product.id === itemToMove);

        if(productToMoveToCart)
        {
          const updatedlist = state.wishlist.filter((item)=>item.id !== itemToMove)

          return{
            ...state,
            cart: [...state.cart,productToMoveToCart],
            wishlist: updatedlist,
          }
        }
        return {
          ...state,
          
        };
      

        default:
        return state;
    }
  };
  
  export default rootReducer;
  