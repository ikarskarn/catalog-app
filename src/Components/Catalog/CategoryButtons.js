import React from 'react';
import './CategoryButtons.css';
import STORE from './STORE.js';

const store = STORE;
const state = {
    link: '#',
}
class CategoryButtons extends React.Component {
    constructor(props) {
        console.log('category buttons props: ' + props);
        super(props);
        this.state = {
            link: '#',
        }
    }
    handleClick = () => {
        console.log('handle click ran');
    }
    randomCategory = (newLink) => {
        if(newLink !== '#') {
            this.setState(
                {link: newLink}
            );
        } else {

            let str = '';
            const rnd = Math.floor(Math.random() * 7);
            switch(rnd) {
                case 0: str = '#cat1'; break;
                case 1: str = '#cat2'; break;
                case 2: str = '#cat3'; break;
                case 3: str = '#cat4'; break;
                case 4: str = '#cat5'; break;
                case 5: str = '#cat6'; break;
                case 6: str = '#cat7'; break;
                default: str = '#cat1'; break;
            }
            console.log(str);
            this.setState(
                {link: str}
            )
            console.log(this.state.link);
    
        }
    }
    render() {
        const buttons = store.categories.map((item, i) => {
            return (
                <a
                    //type='button'
                    key={'b_'+item.key}
                    id={'b_'+item.key}
                    onClick={() => this.randomCategory(item.link)}
                    href={this.state.link}
                    rel="noopener noreferrer"
                >
                    {item.name}
                </a>                
            );
        });        
        return(
            <div className='categoryButtons'>
                {buttons}
            </div>
        );
    }    
}

export default CategoryButtons;

/*

    
    render() {
        const groupOneButtons = STORE.categoryLinks.groupOne.map((item) => 
            <a
                key={item.key}
                href={item.link}
                rel="noopener noreferrer"
            >{item.name}</a>   
        )
        
        const groupTwoButtons = STORE.categoryLinks.groupTwo.map((item) => 
            <a 
                key={item.key}
                href={item.link}
                rel="noopener noreferrer"
            >{item.name}</a>
        )

        const randomButton = (
            <a
                key={STORE.categoryLinks.randomButton.key}
                onClick = {this.randomCategory}
                href={this.state.link}
                rel="noopener noreferrer"
            >{STORE.categoryLinks.randomButton.name}</a>
        )

        return (
            <div>
                <div className='button-group-one'>
                    {groupOneButtons}
                </div>
                <div className="button-group-two">
                    {groupTwoButtons}
                    {randomButton}
                </div>
            </div>
        )
    }
    */