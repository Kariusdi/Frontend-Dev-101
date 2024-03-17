export type PokeDataSet = {
    name: string;
    abilities: [
      ability: {
        ability: any;
        name: string;
      }
    ];
    sprites: {
      other: {
        home: {
          front_default: string;
        };
      };
    };
  };