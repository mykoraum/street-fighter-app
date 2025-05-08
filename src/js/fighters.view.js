import View from "./view.js";
import FighterView from "./fighter.view.js";


class FightersView extends View {
    fightersDetailsMap = new Map();
  
    constructor(fighters) {
      super();
  
      this.handleClick = this.handleFighterClick.bind(this);
      this.createFighters(fighters);
    }
  
    createFighters(fighters) {
      const fighterElements = fighters.map(fighter => {
      //   // 1. Class function with context
      //   const fighterView = new FighterView(fighter, this.handleClick);
      //   // 2. Inline context binding
      //   const fighterView = new FighterView(fighter, this.handleFighterClick.bind(this));
      //   // 3. Arrow function
      //   const fighterView = new FighterView(fighter, (event, fighters) => this.handleFighterClick(event, fighters));
      const fighterView = new FighterView(fighter, this.handleClick);
  
  
        return fighterView.element;
      });
  
  
      this.element = this.createElement({
        tagName: "div",
        className: "fighters",
      });
      this.element.append(...fighterElements);
    }
  
    handleFighterClick(event, fighter) {
      this.fightersDetailsMap.set(fighter._id, fighter);
      console.log("clicked");
      // get from map or load info and add to fightersMap
      // show modal with fighter info
      // allow to edit health and power in this modal
    }
  }

  export default FightersView