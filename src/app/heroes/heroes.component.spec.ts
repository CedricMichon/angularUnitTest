import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "../hero/hero.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpideerDude", strentgh: 8 },
      { id: 2, name: "Wonderful Woman", strentgh: 24 },
      { id: 3, name: "SuperDude", strentgh: 55 },
    ];

    mockHeroService = jasmine.createSpyObj([
      "geHeroes",
      "addHero",
      "deleteHero",
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("should remove the indicated hero from the heroes list", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      
      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });
  });
});
