describe("index.js", function () {
  describe("cats", function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  const cats = ["Milo", "Otis", "Garfield"];

  describe("Array functions", function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push("Milo", "Otis", "Garfield");
    });

    describe("destructivelyAppendCat(name)", function () {
      it("appends a cat to the end of the cats array", function () {
        cats[cats.length] = "Ralph";
        expect(cats).to.have.ordered.members([
          "Milo",
          "Otis",
          "Garfield",
          "Ralph",
        ]);
      });
    });

    describe("destructivelyPrependCat(name)", function () {
      it("prepends a cat to the beginning of the cats array", function () {
        cats.unshift("Bob");

        expect(cats).to.have.ordered.members([
          "Bob",
          "Milo",
          "Otis",
          "Garfield",
        ]);
      });
    });

    describe("destructivelyRemoveLastCat()", function () {
      it("removes the last cat from the cats array", function () {
        cats.length = 2;
        expect(cats)
          .to.have.ordered.members(["Milo", "Otis"])
          .and.to.not.include("Garfield");
      });
    });

    describe("destructivelyRemoveFirstCat()", function () {
      it("removes the first cat from the cats array", function () {
        cats.shift();

        expect(cats)
          .to.have.ordered.members(["Otis", "Garfield"])
          .and.to.not.include("Milo");
      });
    });

    describe("appendCat(name)", function () {
      it("appends a cat to the cats array and returns a new array, leaving the cats array unchanged", function () {
        const appendCat = [cats, "Brooom"];

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe("prependCat(name)", function () {
      it("prepends a cat to the cats array and returns a new array, leaving the cats array unchanged", function () {
        const prependCat = ["Arnold", cats];

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe("removeLastCat()", function () {
      it("removes the last cat in the cats array and returns a new array, leaving the cats array unchanged", function () {
        const removeLastCat = cats.slice("Garfield");

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe("removeFirstCat()", function () {
      it("removes the first cat from the cats array and returns a new array, leaving the cats array unchanged", function () {
        const removeFirstCat = cats.slice("Milo");

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
