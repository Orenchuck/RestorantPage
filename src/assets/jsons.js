const a = [{
    "West": ["Afternoon tea", "Bar", "Desserts"],
    "East": ["Drinks", "Smth Tasty", "Coctails", "Sweet", "Backery"], 
    "Bar": ["Alkohol", "Coffee"],
    "WestMenu": {
      "Afternoon tea": {
        "Tea": {
          "Tea 1": {
            "price": "10",
            "vegeterian": "false",
            "contain nuts": "true",
          },
          "Tea 2": {
            "price": "15",
            "vegeterian": "true",
            "contain nuts": "false",
          },
          "Tea 3": {
            "price": "5",
            "vegeterian": "false",
            "contain nuts": "false",
          }
        },
        "Coffee": {
          "Coffee 1": {
            "price": "12",
            "vegeterian": "false",
            "contain nuts": "false",
          },
          "Coffee vegeterian": {
            "price": "13",
            "vegeterian": "true",
            "contain nuts": "false",
          },
          "Coffee black": {
            "price": "14",
            "vegeterian": "false",
            "contain nuts": "false",
          },
          "Coffee nuts": {
            "price": "19",
            "vegeterian": "false",
            "contain nuts": "true",
          }
        }
      },
      "Bar": {
        "Coctails": {
            "Coctail nuts": {
            "price": "20",
            "vegeterian": "false",
            "contain nuts": "true",
          },
            "Coctail 1": {
            "price": "21",
            "vegeterian": "false",
            "contain nuts": "false",
          },
            "Coctail 2": {
            "price": "22",
            "vegeterian": "true",
            "contain nuts": "false",
          },
            "Coctail 3": {
            "price": "23",
            "vegeterian": "true",
            "contain nuts": "false",
          }
        }
      },
      "Desserts": {
        "Dessert 1": {
            "price": "10",
            "vegeterian": "false",
            "contain nuts": "false",
          },
            "Dessert 2": {
            "price": "11",
            "vegeterian": "false",
            "contain nuts": "false",
          },  
                  "Dessert nuts": {
            "price": "12",
            "vegeterian": "false",
            "contain nuts": "true",
          },
      }
    },
    "EastMenu": {
      "Drinks": {
                    "CoctailEast 1": {
            "price": "21",
            "vegeterian": "false",
            "contain nuts": "false",
          },
            "CoctailEast 2": {
            "price": "13",
            "vegeterian": "false",
            "contain nuts": "true",
          },
            "CoctailEast 3": {
            "price": "21",
            "vegeterian": "true",
            "contain nuts": "false",
          },
      }
    },
    "BarMenu": {
      "Alkohol": {
            "CoctailBar 3": {
            "price": "21",
            "vegeterian": "true",
            "contain nuts": "false",
          },
                      "CoctailBar 1": {
            "price": "21",
            "vegeterian": "false",
            "contain nuts": "false",
          },
                      "CoctailBar 2": {
            "price": "21",
            "vegeterian": "true",
            "contain nuts": "true",
          },
                      "CoctailBar 4": {
            "price": "21",
            "vegeterian": "false",
            "contain nuts": "true",
          },
      }
    }
  }]
  const b =    [{ 

      "Afternoon tea": [
          "Tea 1", 10, false, true],}]

  const json = JSON.stringify(a);
  json;
  const json1 = JSON.stringify(b);
  console.log(json1);
    
  ddd(){
    [{"Tea1": ["Tea1", "10", "false", "true"],
  "Tea2": ["Tea12", "15", "true", "false"],
  "Tea3": ["Tea13", "5", "false", "false"],
  "Coffee1": ["Coffee1", "10", "false", "true"],
  "Coffee2": ["Coffee1", "15", "true", "false"],
  "Coffee3": ["Smth", "55", "false", "false"]}]

              [{"Coctail1": ["10", "false", "true"],
  "Coctail12": ["15", "true", "false"],
  "Coctail13": ["5", "false", "false"],
  "Coctail14": ["10", "false", "true"],
  "Coctail15": ["15", "true", "false"],
  "Coctail16": ["5", "false", "false"]}]
const a = [{"West": ["Afternoon tea", "Bar", "Desserts"],
"East": ["Drinks", "Smth Tasty", "Coctails", "Sweet", "Backery"], 
"Bar": ["Alkohol", "Coffee"],
"WestMenu": {
"Afternoon tea": {
"Tea": {
  "Tea1": {
    "price": "10",
    "vegeterian": "false",
    "nuts": "true",
  },
  "Tea2": {
    "price": "15",
    "vegeterian": "true",
    "nuts": "false",
  },
  "Tea3": {
    "price": "5",
    "vegeterian": "false",
    "nuts": "false",
  }
},
"Coffee": {
  "Coffee1": {
    "price": "12",
    "vegeterian": "false",
    "nuts": "false",
  },
  "CoffeeVegeterian": {
    "price": "13",
    "vegeterian": "true",
    "nuts": "false",
  },
  "CoffeeBlack": {
    "price": "14",
    "vegeterian": "false",
    "nuts": "false",
  },
  "CoffeeNuts": {
    "price": "19",
    "vegeterian": "false",
    "nuts": "true",
  }
}
},
"Bar": {
"Coctails": {
    "CoctailNuts": {
    "price": "20",
    "vegeterian": "false",
    "nuts": "true",
  },
    "Coctail1": {
    "price": "21",
    "vegeterian": "false",
    "nuts": "false",
  },
    "Coctail2": {
    "price": "22",
    "vegeterian": "true",
    "nuts": "false",
  },
    "Coctail3": {
    "price": "23",
    "vegeterian": "true",
    "nuts": "false",
  }
}
},
"Desserts": {
"Dessert1": {
    "price": "10",
    "vegeterian": "false",
    "nuts": "false",
  },
    "Dessert2": {
    "price": "11",
    "vegeterian": "false",
    "nuts": "false",
  },  
          "DessertNuts": {
    "price": "12",
    "vegeterian": "false",
    "nuts": "true",
  },
}
},
"EastMenu": {
"Drinks": {
            "CoctailEast1": {
    "price": "21",
    "vegeterian": "false",
    "nuts": "false",
  },
    "CoctailEast2": {
    "price": "13",
    "vegeterian": "false",
    "nuts": "true",
  },
    "CoctailEast3": {
    "price": "21",
    "vegeterian": "true",
    "nuts": "false",
  },
}
},
"BarMenu": {
"Alkohol": {
    "CoctailBar3": {
    "price": "21",
    "vegeterian": "true",
    "nuts": "false",
  },
              "CoctailBar1": {
    "price": "21",
    "vegeterian": "false",
    "nuts": "false",
  },
              "CoctailBar2": {
    "price": "21",
    "vegeterian": "true",
    "nuts": "true",
  },
              "CoctailBar4": {
    "price": "21",
    "vegeterian": "false",
    "nuts": "true",
  },
}
}}]
const json = JSON.stringify(a);
console.log(json);
}


      // axios.get('https://mocki.io/v1/af85400c-5305-4020-933b-9036984be339')
      // axios.get('https://mocki.io/v1/a9166037-10bb-4408-8a6a-3842a15097e3')
      // axios.get('https://mocki.io/v1/0a64d2c8-571c-4945-9505-4835429e33d3')
      // .then(res => {
      //   this.currentMenu = res.data[0];
      //   console.log(this.currentMenu);
      // })

          // axios.get('https://mocki.io/v1/35698c61-bec0-48ba-8200-5f71e0eeaf46')
    // axios.get('https://mocki.io/v1/d00e0e1c-2116-49c1-8a19-152c4fbaa352')
