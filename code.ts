// import './style.css';

// class Control {
//   public node: HTMLElement;

//   constructor(parentNode: HTMLElement | null, tagName: string = 'div', className: string = '', content: string = '') {
//     const el = document.createElement(tagName);
//     el.className = className;
//     el.textContent = content;
//     if (parentNode){
//       parentNode.append(el);
//     }
//     this.node = el;
//   }


// }

// interface IButtonStyles {
//     default: string,
//     active: string

// }


// class Button extends Control {
//     private state: Boolean;
//     private styles: IButtonStyles;
//     public onClick: () => void;
//     public onChange: (state: Boolean) => void;

//     constructor(parentNode: HTMLElement | null, styles: IButtonStyles, caption: string = '', ) {
//         super(parentNode, "button", styles.default, caption);
//         this.styles = styles;
//         this.node.onclick = () => {
//             this.setState();
//             this.onClick && this.onClick();
//         }
//     }

//     setState (newState?: Boolean) {
//         this.state = newState === undefined ? !this.state : newState;
//         this.refresh();

//         this.onChange && this.onChange(this.state);
//     }

//     refresh () {
//         this.node.className = this.state ? this.styles.active : this.styles.default;

//     }


// }

// interface IMenuStyles {
//     wrapper: string,
//     buttonStyles: IButtonStyles,
// }

// class Menu extends Control {
//     private styles: IMenuStyles;
//     private arrButton: Button[] = [];
//     public onChange: (index: number, but: Button) => void;


//     constructor (parentNode: HTMLElement | null, styles: IMenuStyles ) {
//         super(parentNode, "div", styles.wrapper);
//         this.styles = styles;
//     }

//     addButton (text: string) {
//         let but = new Button(this.node, this.styles.buttonStyles, text);
//         let arrLength = this.arrButton.length
//         but.onClick = () => {
//             this.arrButton.forEach(a=> a.setState(a==but?true:false))
//             this.onChange && this.onChange(arrLength, but)
//         }
//         this.arrButton.push(but);
//     }
// }

// const buttons = new Menu(document.body, {wrapper: "alo", buttonStyles:{default: "btn",active: "btn-active"}})
// for (let i = 0; i < 10; i++){
//     buttons.addButton(`data + ${i}`);
// }
// buttons.onChange = (index, button) => { console.log(button.node.textContent, index) };

// const buttons2 = new Menu(document.body, {wrapper: "alo", buttonStyles:{default: "btn",active: "btn-active"}})
// for (let i = 0; i < 10; i++){
//     buttons2.addButton(`data + ${i}`);
// }
// buttons2.onChange = (index, button) => { console.log(button.node.textContent, index) };

// export default Control;
