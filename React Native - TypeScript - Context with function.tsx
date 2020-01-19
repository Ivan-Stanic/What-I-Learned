//In the parent

interface INavBarScroll {
  setScrollValues (scrollPadding: number, scrollHeight: number) : void;
};

export let NavBarScrollContext = React.createContext<INavBarScroll>({setScrollValues: (scrollPadding, scrollHeight) => {}});

interface IState {
  ....;
  navBarScrollPadding: number;
  navBarScrollHeight: number;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);

    this.updateScrollValues = this.updateScrollValues.bind(this);

    this.state = {....,
                  navBarScrollPadding: 0,
                  navBarScrollHeight: 30,
                  };
  }

  updateScrollValues = (scrollPadding: number, scrollHeight: number) => {
    this.setState({navBarScrollPadding: scrollPadding, navBarScrollHeight: scrollHeight});
  }
  
  ....
  
  return (
          ....
          <NavBarScrollContext.Provider value = {{setScrollValues: this.updateScrollValues}}>
              <ChildComponent />
          </NavBarScrollContext.Provider>
          ....
        )
      }
    }
 }
 
 //In the children down the line
 
import {LaunchContext, NavBarScrollContext} from './App';

export class ChildComponent extends React.Component<any, any> {
    ....
    
    public render() {
        return(
          <NavBarScrollContext.Consumer>
            {({setScrollValues}) => 
                (
                ....
                //somewhere inside the component
                setScrollValues(0, 0);
                ....
                )}
          </NavBarScrollContext.Consumer>
        )
    }
}
