import FightersView from "./fighters.view.js";
import fighterService from "./services/fighter.service.js";



class App {
    static rootElement = document.getElementById("root");
    static loadingElement = document.getElementById("loading-overlay");
  
    static async startApp() {
      try {
        App.loadingElement.style.visibility = "visible";
  
        const fighters = await fighterService.getFighters();
        const fightersView = new FightersView(fighters);
  
        App.rootElement.appendChild(fightersView.element);
      } catch (error) {
        console.warn(error);
        App.rootElement.innerText = "Failed to load data";
      } finally {
        App.loadingElement.style.visibility = "hidden";
      }
    }
  }
  

  export default App;