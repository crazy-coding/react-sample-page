(this["webpackJsonpreact-sample"]=this["webpackJsonpreact-sample"]||[]).push([[0],{56:function(e,a,t){e.exports=t(92)},91:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(16),r=t.n(c),s=t(11),m=t(18),i=t(27),o=t(22),E=t(14),d=Object(E.a)(Object(E.a)({},{defaultPath:"/",lang:{key:"en",name:"EN"}}),{},{isFullScreen:!1,wallet:!1}),h=(e=d,a)=>{switch(a.type){case"FULL_SCREEN":return Object(E.a)(Object(E.a)({},e),{},{isFullScreen:!e.isFullScreen});case"FULL_SCREEN_EXIT":return Object(E.a)(Object(E.a)({},e),{},{isFullScreen:!1});case"LANGUAGE":return Object(E.a)(Object(E.a)({},e),{},{lang:a.lang});case"WALLET":return Object(E.a)(Object(E.a)({},e),{},{wallet:a.wallet});default:return e}},C={BLANK_LINK:"#!",LAGUAGES:[{key:"en",name:"EN"},{key:"ge",name:"GE"},{key:"cn",name:"CN"},{key:"jp",name:"JP"}]},p=t(93),g=t(94),w=t(95),u=t(109),x=t(110),v=t(111),N=t(96),k=t(97),f=t(98),b=t(99),L=t(100);class y extends n.a.Component{constructor(e){super(e),this.toggleCollapse=()=>{this.setState({isOpen:!this.state.isOpen})},this.state={isOpen:!1}}componentDidMount(){}render(){return n.a.createElement(p.a,{expand:"lg",className:"fixed-top list-unstyled"},n.a.createElement(g.a,{className:"navbar-body"},n.a.createElement(w.a,{href:"/"},n.a.createElement("svg",{width:"49",height:"36",viewBox:"0 0 49 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("rect",{x:"28.0909",y:"7.95349",width:"20.1818",height:"20.1818",rx:"10.0909",fill:"#B4BDFF"}),n.a.createElement("rect",{x:"13.0908",y:"3.34888",width:"29.4545",height:"29.4545",rx:"14.7273",fill:"#7282F5"}),n.a.createElement("rect",{width:"36",height:"36",rx:"18",fill:"#3C50E0"}))),n.a.createElement(u.a,{className:"pull-right language",nav:!0},n.a.createElement(x.a,{nav:!0},this.props.lang.name,n.a.createElement("i",{className:"fa fa-angle-down ml-2"})),n.a.createElement(v.a,{right:!0},C.LAGUAGES.map((e,a)=>n.a.createElement(N.a,{key:e.key,onClick:()=>this.props.onChangeLanguage(e)},e.name)))),n.a.createElement("div",{className:"navbar-toggler","data-toggle":"collapse",type:"button",onClick:this.toggleCollapse},n.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("rect",{x:"3",y:"11",width:"22",height:"3",rx:"1.5",fill:"black"}),n.a.createElement("rect",{x:"3",y:"18",width:"27",height:"3",rx:"1.5",fill:"black"}))),n.a.createElement(k.a,{className:"justify-content-center",isOpen:this.state.isOpen,navbar:!0},n.a.createElement(f.a,{navbar:!0},n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Overview")),n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Products")),n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Services")),n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Blockchain")),n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Token")),n.a.createElement(b.a,null,n.a.createElement(L.a,{to:"/"},"Roadmap"))))))}}var V=Object(o.b)(e=>({lang:e.lang}),e=>({onFullScreen:()=>e({type:"FULL_SCREEN"}),onChangeLanguage:a=>e({type:"LANGUAGE",lang:a})}))(y),A=t(101),M=t(102),S=t(51),H=t(103),B=t(13);class F extends n.a.Component{render(){return n.a.createElement("footer",null,n.a.createElement(g.a,null,n.a.createElement(A.a,null,n.a.createElement(M.a,{lg:"4",md:"6",xs:"12",className:"mb-4"},n.a.createElement("svg",{width:"49",height:"36",viewBox:"0 0 49 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo"},n.a.createElement("rect",{x:"28.0909",y:"7.95349",width:"20.1818",height:"20.1818",rx:"10.0909",fill:"#B4BDFF"}),n.a.createElement("rect",{x:"13.0908",y:"3.34888",width:"29.4545",height:"29.4545",rx:"14.7273",fill:"#7282F5"}),n.a.createElement("rect",{width:"36",height:"36",rx:"18",fill:"#3C50E0"})),n.a.createElement("p",null,"\xa9 ",(new Date).getFullYear(),", Passport. All right reserved")),n.a.createElement(M.a,{lg:"4",md:"6",xs:"12",className:"mb-4"},"Links",n.a.createElement(A.a,{className:"mt-2"},n.a.createElement(M.a,{lg:"6",xs:"12"},n.a.createElement(A.a,null,n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Overview")),n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Blockchain")),n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Services")))),n.a.createElement(M.a,{lg:"6",xs:"12"},n.a.createElement(A.a,null,n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Blockchain")),n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Token")),n.a.createElement(M.a,{lg:"12",xs:"4"},n.a.createElement(B.a,{to:"/"},"Roadmap")))))),n.a.createElement(M.a,{xs:"12",className:"d-block d-md-none mb-3"},n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"22",height:"17",viewBox:"0 0 22 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M21.4592 2.01238C20.6896 2.35373 19.8624 2.58442 18.9944 2.68815C19.8803 2.15701 20.5609 1.31598 20.8813 0.31378C20.052 0.80564 19.1336 1.16278 18.156 1.3552C17.3732 0.52112 16.2579 0 15.0235 0C12.6534 0 10.7317 1.92147 10.7317 4.29155C10.7317 4.6279 10.7697 4.95546 10.8429 5.2696C7.27609 5.0906 4.11375 3.38203 1.99709 0.78551C1.62765 1.41935 1.41601 2.15656 1.41601 2.94309C1.41601 4.43204 2.17364 5.74563 3.32523 6.5153C2.62179 6.4929 1.95996 6.2999 1.38139 5.97846C1.38098 5.99639 1.38098 6.0143 1.38098 6.0324C1.38098 8.1118 2.86033 9.8463 4.82359 10.2406C4.46349 10.3387 4.08434 10.3912 3.69294 10.3912C3.4164 10.3912 3.14755 10.3642 2.88546 10.3142C3.43161 12.0191 5.01653 13.26 6.89454 13.2945C5.42576 14.4457 3.57527 15.1318 1.56453 15.1318C1.21812 15.1318 0.876511 15.1114 0.540771 15.0717C2.44003 16.2894 4.69591 17 7.1195 17C15.0134 17 19.3302 10.4605 19.3302 4.78918C19.3302 4.60314 19.326 4.41805 19.3177 4.23395C20.1563 3.62886 20.8839 2.87302 21.4592 2.01238Z",fill:"#3C50E0"}))),n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M18.4042 1.94433L20 0.417662V0.0834961H14.4717L10.5317 9.89015L6.04917 0.0834961H0.2525V0.417662L2.11667 2.66183C2.29833 2.82766 2.39333 3.07016 2.36917 3.31433V12.1335C2.42667 12.451 2.32333 12.7777 2.1 13.0085L0 15.5535V15.8835H5.95417V15.5493L3.85417 13.0085C3.62667 12.7768 3.51917 12.456 3.565 12.1335V4.50516L8.79167 15.8876H9.39917L13.8933 4.50516V13.5727C13.8933 13.8118 13.8933 13.861 13.7367 14.0177L12.12 15.5818V15.9168H19.9633V15.5827L18.405 14.0568C18.2683 13.9535 18.1975 13.7801 18.2267 13.6118V2.38933C18.1975 2.22016 18.2675 2.04683 18.4042 1.94433Z",fill:"#3C50E0"}))),n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"19",height:"16",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M1.16484 6.96805L12.4825 2.21897C13.5997 1.72428 17.3884 0.141253 17.3884 0.141253C17.3884 0.141253 19.1371 -0.55132 18.9914 1.13064C18.9428 1.82322 18.5542 4.24722 18.1656 6.86911L16.9513 14.6358C16.9513 14.6358 16.8541 15.7736 16.0284 15.9715C15.2026 16.1694 13.8426 15.2789 13.5997 15.0811C13.4054 14.9326 9.95667 12.7065 8.69376 11.6182C8.35374 11.3214 7.96515 10.7277 8.74233 10.0352C10.491 8.40266 12.5797 6.37441 13.8426 5.08821C14.4255 4.49457 15.0083 3.10942 12.5797 4.79139L5.73077 9.49099C5.73077 9.49099 4.95359 9.98569 3.49638 9.54046C2.03917 9.09524 0.33909 8.5016 0.33909 8.5016C0.33909 8.5016 -0.826678 7.75956 1.16484 6.96805V6.96805Z",fill:"#3C50E0"})))),n.a.createElement(M.a,{lg:"4",md:"12",xs:"12"},"Subscribe",n.a.createElement(A.a,{className:"mt-3"},n.a.createElement(M.a,{lg:"12",md:"6",xs:"12"},n.a.createElement("div",{className:"email-inputgroup mb-3"},n.a.createElement(H.a,{placeholder:"Email address"}),n.a.createElement(S.a,{color:"primary",block:!0},n.a.createElement("svg",{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.3296 10.758C12.0231 11.0807 11.5261 11.0807 11.2195 10.758C10.913 10.4353 10.913 9.91222 11.2195 9.58956L15.66 4.91578C15.9665 4.59312 16.4635 4.59312 16.7701 4.91578C17.0766 5.23843 17.0766 5.76157 16.7701 6.08422L12.3296 10.758Z",fill:"white"}),n.a.createElement("path",{d:"M11.2195 1.41044C10.913 1.08778 10.913 0.56465 11.2195 0.241993C11.5261 -0.0806643 12.0231 -0.0806644 12.3296 0.241993L16.7701 4.91578C17.0766 5.23843 17.0766 5.76157 16.7701 6.08422C16.4635 6.40688 15.9665 6.40688 15.66 6.08422L11.2195 1.41044Z",fill:"white"}),n.a.createElement("path",{d:"M0 5.49999C0 5.04369 0.351443 4.67378 0.784971 4.67378H14.9144C15.348 4.67378 15.6994 5.04369 15.6994 5.49999C15.6994 5.9563 15.348 6.32621 14.9144 6.32621H0.784971C0.351444 6.32621 0 5.9563 0 5.49999Z",fill:"white"}))))),n.a.createElement(M.a,{lg:"12",md:"6",xs:"12",className:"d-none d-md-flex"},n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 22 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M21.4592 2.01238C20.6896 2.35373 19.8624 2.58442 18.9944 2.68815C19.8803 2.15701 20.5609 1.31598 20.8813 0.31378C20.052 0.80564 19.1336 1.16278 18.156 1.3552C17.3732 0.52112 16.2579 0 15.0235 0C12.6534 0 10.7317 1.92147 10.7317 4.29155C10.7317 4.6279 10.7697 4.95546 10.8429 5.2696C7.27609 5.0906 4.11375 3.38203 1.99709 0.78551C1.62765 1.41935 1.41601 2.15656 1.41601 2.94309C1.41601 4.43204 2.17364 5.74563 3.32523 6.5153C2.62179 6.4929 1.95996 6.2999 1.38139 5.97846C1.38098 5.99639 1.38098 6.0143 1.38098 6.0324C1.38098 8.1118 2.86033 9.8463 4.82359 10.2406C4.46349 10.3387 4.08434 10.3912 3.69294 10.3912C3.4164 10.3912 3.14755 10.3642 2.88546 10.3142C3.43161 12.0191 5.01653 13.26 6.89454 13.2945C5.42576 14.4457 3.57527 15.1318 1.56453 15.1318C1.21812 15.1318 0.876511 15.1114 0.540771 15.0717C2.44003 16.2894 4.69591 17 7.1195 17C15.0134 17 19.3302 10.4605 19.3302 4.78918C19.3302 4.60314 19.326 4.41805 19.3177 4.23395C20.1563 3.62886 20.8839 2.87302 21.4592 2.01238Z",fill:"#3C50E0"}))),n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M18.4042 1.94433L20 0.417662V0.0834961H14.4717L10.5317 9.89015L6.04917 0.0834961H0.2525V0.417662L2.11667 2.66183C2.29833 2.82766 2.39333 3.07016 2.36917 3.31433V12.1335C2.42667 12.451 2.32333 12.7777 2.1 13.0085L0 15.5535V15.8835H5.95417V15.5493L3.85417 13.0085C3.62667 12.7768 3.51917 12.456 3.565 12.1335V4.50516L8.79167 15.8876H9.39917L13.8933 4.50516V13.5727C13.8933 13.8118 13.8933 13.861 13.7367 14.0177L12.12 15.5818V15.9168H19.9633V15.5827L18.405 14.0568C18.2683 13.9535 18.1975 13.7801 18.2267 13.6118V2.38933C18.1975 2.22016 18.2675 2.04683 18.4042 1.94433Z",fill:"#3C50E0"}))),n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",className:"social-btn"},n.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M1.16484 6.96805L12.4825 2.21897C13.5997 1.72428 17.3884 0.141253 17.3884 0.141253C17.3884 0.141253 19.1371 -0.55132 18.9914 1.13064C18.9428 1.82322 18.5542 4.24722 18.1656 6.86911L16.9513 14.6358C16.9513 14.6358 16.8541 15.7736 16.0284 15.9715C15.2026 16.1694 13.8426 15.2789 13.5997 15.0811C13.4054 14.9326 9.95667 12.7065 8.69376 11.6182C8.35374 11.3214 7.96515 10.7277 8.74233 10.0352C10.491 8.40266 12.5797 6.37441 13.8426 5.08821C14.4255 4.49457 15.0083 3.10942 12.5797 4.79139L5.73077 9.49099C5.73077 9.49099 4.95359 9.98569 3.49638 9.54046C2.03917 9.09524 0.33909 8.5016 0.33909 8.5016C0.33909 8.5016 -0.826678 7.75956 1.16484 6.96805V6.96805Z",fill:"#3C50E0"})))))))))}}var O=F,j=t(108),P=t(104),Z=t(105);class _ extends n.a.Component{constructor(e){super(e),this.togglePopup=()=>{this.setState({isOpen:!this.state.isOpen})},this.onBrowseWallet=()=>{this.togglePopup()},this.onWalletConnect=()=>{this.togglePopup()},this.state={isOpen:!1}}componentWillMount(){this.props.wallet||this.togglePopup()}render(){return n.a.createElement(j.a,{isOpen:this.state.isOpen,toggle:this.togglePopup,size:"lg",className:"wallet-popup"},n.a.createElement(P.a,{toggle:this.togglePopup,close:n.a.createElement("button",{className:"close",onClick:this.togglePopup},n.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M30 10L10 30",stroke:"#798A9E","stroke-width":"3.33333","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M10 10L30 30",stroke:"#798A9E","stroke-width":"3.33333","stroke-linecap":"round","stroke-linejoin":"round"})))},"Choose a wallet"),n.a.createElement(Z.a,null,n.a.createElement(A.a,null,n.a.createElement(M.a,{md:"6",xs:"12"},n.a.createElement("div",{className:"cus-card cursor-pointer active wallet-pan mb-45",onClick:this.onBrowseWallet},n.a.createElement("div",{className:"wallet-pan-icon"},n.a.createElement("svg",{width:"58",height:"42",viewBox:"0 0 58 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{cx:"37",cy:"21",r:"21",fill:"white"}),n.a.createElement("path",{d:"M29.125 32H2.875C1.28975 32 0 30.7103 0 29.125V12.875C0 11.2897 1.28975 10 2.875 10H29.125C30.7103 10 32 11.2897 32 12.875V29.125C32 30.7103 30.7103 32 29.125 32ZM2.875 12C2.3925 12 2 12.3925 2 12.875V29.125C2 29.6075 2.3925 30 2.875 30H29.125C29.6075 30 30 29.6075 30 29.125V12.875C30 12.3925 29.6075 12 29.125 12H2.875Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M4.57143 15.7857C4.57143 15.1545 5.0831 14.6429 5.71429 14.6429H8C8.63118 14.6429 9.14286 15.1545 9.14286 15.7857V18.0714C9.14286 18.7026 8.63118 19.2143 8 19.2143H5.71429C5.0831 19.2143 4.57143 18.7026 4.57143 18.0714V15.7857Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M20.5708 23.8569C20.3541 23.8569 20.1358 23.7868 19.9524 23.6423C19.5187 23.3003 19.4442 22.6716 19.7861 22.2378C20.0665 21.8823 20.2146 21.4543 20.2146 21.0001C20.2146 20.5459 20.0665 20.1178 19.7862 19.7623C19.4443 19.3286 19.5188 18.6998 19.9525 18.3578C20.3861 18.016 21.015 18.0903 21.3569 18.5241C21.91 19.2258 22.2146 20.1051 22.2146 21.0001C22.2146 21.895 21.91 22.7743 21.3568 23.476C21.1595 23.7263 20.8666 23.8569 20.5708 23.8569Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M24.1962 26.3392C23.9582 26.3392 23.7195 26.2548 23.5285 26.0834C23.1175 25.7146 23.0833 25.0823 23.4522 24.6713C24.3582 23.6617 24.8571 22.3578 24.8571 20.9998C24.8571 19.6418 24.3582 18.3379 23.4522 17.3283C23.0833 16.9172 23.1175 16.285 23.5285 15.9162C23.9396 15.5474 24.5718 15.5815 24.9407 15.9925C26.1765 17.3697 26.8571 19.148 26.8571 20.9998C26.8571 22.8516 26.1765 24.6299 24.9407 26.007C24.7433 26.2271 24.4703 26.3392 24.1962 26.3392Z",fill:"#798A9E"}))),n.a.createElement("div",{className:"wallet-pan-title"},"Browse Wallet"),n.a.createElement("div",{className:"wallet-pan-text"},"Use MetaMask or imToken to connect to Bella"))),n.a.createElement(M.a,{md:"6",xs:"12"},n.a.createElement("div",{className:"cus-card cursor-pointer active wallet-pan",onClick:this.onWalletConnect},n.a.createElement("div",{className:"wallet-pan-icon"},n.a.createElement("svg",{width:"58",height:"42",viewBox:"0 0 58 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{cx:"37",cy:"21",r:"21",fill:"white"}),n.a.createElement("path",{d:"M29.125 32H2.875C1.28975 32 0 30.7103 0 29.125V12.875C0 11.2897 1.28975 10 2.875 10H29.125C30.7103 10 32 11.2897 32 12.875V29.125C32 30.7103 30.7103 32 29.125 32ZM2.875 12C2.3925 12 2 12.3925 2 12.875V29.125C2 29.6075 2.3925 30 2.875 30H29.125C29.6075 30 30 29.6075 30 29.125V12.875C30 12.3925 29.6075 12 29.125 12H2.875Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M4.57143 15.7857C4.57143 15.1545 5.0831 14.6429 5.71429 14.6429H8C8.63118 14.6429 9.14286 15.1545 9.14286 15.7857V18.0714C9.14286 18.7026 8.63118 19.2143 8 19.2143H5.71429C5.0831 19.2143 4.57143 18.7026 4.57143 18.0714V15.7857Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M20.5708 23.8569C20.3541 23.8569 20.1358 23.7868 19.9524 23.6423C19.5187 23.3003 19.4442 22.6716 19.7861 22.2378C20.0665 21.8823 20.2146 21.4543 20.2146 21.0001C20.2146 20.5459 20.0665 20.1178 19.7862 19.7623C19.4443 19.3286 19.5188 18.6998 19.9525 18.3578C20.3861 18.016 21.015 18.0903 21.3569 18.5241C21.91 19.2258 22.2146 20.1051 22.2146 21.0001C22.2146 21.895 21.91 22.7743 21.3568 23.476C21.1595 23.7263 20.8666 23.8569 20.5708 23.8569Z",fill:"#798A9E"}),n.a.createElement("path",{d:"M24.1962 26.3392C23.9582 26.3392 23.7195 26.2548 23.5285 26.0834C23.1175 25.7146 23.0833 25.0823 23.4522 24.6713C24.3582 23.6617 24.8571 22.3578 24.8571 20.9998C24.8571 19.6418 24.3582 18.3379 23.4522 17.3283C23.0833 16.9172 23.1175 16.285 23.5285 15.9162C23.9396 15.5474 24.5718 15.5815 24.9407 15.9925C26.1765 17.3697 26.8571 19.148 26.8571 20.9998C26.8571 22.8516 26.1765 24.6299 24.9407 26.007C24.7433 26.2271 24.4703 26.3392 24.1962 26.3392Z",fill:"#798A9E"}))),n.a.createElement("div",{className:"wallet-pan-title"},"Wallet Connect"),n.a.createElement("div",{className:"wallet-pan-text"},"Use MetaMask or imToken to connect to Bella"))))))}}var T=Object(o.b)(e=>({wallet:e.wallet}),e=>({togglePopup:()=>e({type:"WALLET"})}))(_),U=t(106),D=t(107);class z extends n.a.Component{constructor(e){super(e),this.changeActiveTab=(e,a,t)=>{e.preventDefault(),this.setState({[a]:t})},this.state={exchange:"pass_usdt",verticalTabs:"profile",verticalTabsIcons:"home",pageTabs:"home",openedCollapses:["collapseOne"]}}componentDidMount(){document.body.classList.toggle("home-page")}componentWillUnmount(){document.body.classList.toggle("home-page")}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(g.a,null,n.a.createElement(A.a,null,n.a.createElement(M.a,{xs:"auto"},n.a.createElement(U.a,{className:"card-exchange"},n.a.createElement(D.a,{className:"d-flex"},n.a.createElement("div",{className:"cus-card cursor-pointer"+("pass_usdt"===this.state.exchange?" active":""),onClick:e=>this.changeActiveTab(e,"exchange","pass_usdt")},"PASS / USDT"),n.a.createElement("div",{className:"cus-card cursor-pointer"+("pass_eth"===this.state.exchange?" active":""),onClick:e=>this.changeActiveTab(e,"exchange","pass_eth")},"PASS / ETH"),n.a.createElement("div",{className:"cus-card cursor-pointer"+("pazzi_pass"===this.state.exchange?" active":""),onClick:e=>this.changeActiveTab(e,"exchange","pazzi_pass")},"PAZZI / PASS")))),n.a.createElement(M.a,{xs:"12"},n.a.createElement(U.a,{className:"card-stats"},n.a.createElement(D.a,null,n.a.createElement("div",{className:"d-none d-md-block d-md-flex justify-content-between mb-45"},n.a.createElement(M.a,{md:"auto"},n.a.createElement("div",{className:"cus-card active"},n.a.createElement("h1",{className:"cus-card-title"},"0.00%"),n.a.createElement("p",{className:"cus-card-info"},"Annual Reward"))),n.a.createElement(M.a,{md:"auto"},n.a.createElement("div",{className:"cus-card active"},n.a.createElement("h1",{className:"cus-card-title"},"0.00%"),n.a.createElement("p",{className:"cus-card-info"},"Reward Multiplier"))),n.a.createElement(M.a,{md:"auto"},n.a.createElement("div",{className:"cus-card active"},n.a.createElement("h1",{className:"cus-card-title"},"0.00000 Pass"),n.a.createElement("p",{className:"cus-card-info"},"Annual Rewards")))),n.a.createElement("div",{className:"d-block d-md-none justify-content-between mb-4"},n.a.createElement("div",{className:"cus-card active"},n.a.createElement(A.a,null,n.a.createElement(M.a,{xs:"12",className:"mb-2"}),n.a.createElement(M.a,{xs:"6",className:"mb-2"},n.a.createElement("p",{className:"cus-card-info"},"Annual Reward")),n.a.createElement(M.a,{xs:"6",className:"mb-2"},n.a.createElement("h1",{className:"cus-card-title"},"0.00%")),n.a.createElement(M.a,{xs:"6",className:"mb-2"},n.a.createElement("p",{className:"cus-card-info"},"Reward Multiplier")),n.a.createElement(M.a,{xs:"6",className:"mb-2"},n.a.createElement("h1",{className:"cus-card-title"},"0.00%")),n.a.createElement(M.a,{xs:"6"},n.a.createElement("p",{className:"cus-card-info"},"Annual Rewards")),n.a.createElement(M.a,{xs:"6"},n.a.createElement("h1",{className:"cus-card-title"},"0.00000 Pass"))))),n.a.createElement("div",{className:"d-md-flex justify-content-between mb-45"},n.a.createElement(M.a,{md:"auto",xs:"12"},n.a.createElement("div",{className:"cus-card cus-btn active"},n.a.createElement("svg",{width:"52",height:"40",viewBox:"0 0 52 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-1"},n.a.createElement("circle",{cx:"36",cy:"20",r:"16",fill:"#F1F3FF"}),n.a.createElement("path",{d:"M23.3334 3.33334H10C9.11597 3.33334 8.26812 3.68453 7.643 4.30965C7.01788 4.93478 6.66669 5.78262 6.66669 6.66668V33.3333C6.66669 34.2174 7.01788 35.0652 7.643 35.6904C8.26812 36.3155 9.11597 36.6667 10 36.6667H30C30.8841 36.6667 31.7319 36.3155 32.357 35.6904C32.9822 35.0652 33.3334 34.2174 33.3334 33.3333V13.3333L23.3334 3.33334Z",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M23.3333 3.33334V13.3333H33.3333",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M26.6666 21.6667H13.3333",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M26.6666 28.3333H13.3333",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M16.6666 15H15H13.3333",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Uniswap Bell / USDT")),n.a.createElement(M.a,{md:"auto",xs:"12"},n.a.createElement("div",{className:"cus-card cus-btn active"},n.a.createElement("svg",{width:"55",height:"40",viewBox:"0 0 55 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-1"},n.a.createElement("circle",{cx:"38.8281",cy:"20",r:"16",fill:"#F1F3FF"}),n.a.createElement("path",{d:"M35 6.66666H4.99999C3.15904 6.66666 1.66666 8.15904 1.66666 9.99999V30C1.66666 31.8409 3.15904 33.3333 4.99999 33.3333H35C36.8409 33.3333 38.3333 31.8409 38.3333 30V9.99999C38.3333 8.15904 36.8409 6.66666 35 6.66666Z",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("path",{d:"M1.66666 16.6667H38.3333",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Enter Amount")),n.a.createElement(M.a,{md:"auto",xs:"12"},n.a.createElement("div",{className:"cus-card cus-btn active"},n.a.createElement("svg",{width:"52",height:"40",viewBox:"0 0 52 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-1"},n.a.createElement("circle",{cx:"36",cy:"20",r:"16",fill:"#F1F3FF"}),n.a.createElement("path",{d:"M35 25C35 25.8841 34.6488 26.7319 34.0237 27.357C33.3986 27.9821 32.5507 28.3333 31.6667 28.3333H11.6667L5 35V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V25Z",stroke:"#3C50E0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Staking Complete"))),n.a.createElement("div",{className:"card-info"},n.a.createElement(M.a,{xs:"12"},"PASS Contract: 0xxx0xxx0xxx0x0xx0x0x0x0x0x0x0x0x"))))),n.a.createElement(M.a,{xs:"12",md:"12",lg:"9"},n.a.createElement(U.a,{className:"card-deposit"},n.a.createElement(D.a,null,n.a.createElement("div",{className:"mb-45"},n.a.createElement("span",{className:"dep-text mr-md-5 mr-2"},"Deposit Amount"),n.a.createElement(B.a,{to:"/"},"Check tutorial")),n.a.createElement("div",{className:"staking-amount-inputgroup mb-45"},n.a.createElement(H.a,{placeholder:"Staking amount"}),n.a.createElement(S.a,{color:"primary",block:!0},"Max")),n.a.createElement(A.a,{className:"card-info"},n.a.createElement(M.a,{md:"6",lg:"12",xs:"12",className:"mb-3"},"Balance: 0.0000 (PASS / USDT Uni LP)"),n.a.createElement(M.a,{md:"6",lg:"12",xs:"12"},"Staked: 0.0000 (PASS / USDT Uni LP)"))))),n.a.createElement(M.a,{xs:"12",md:"12",lg:"3",className:"pl-lg-0"},n.a.createElement(U.a,{className:"card-advertise",color:"primary"},n.a.createElement(D.a,null,n.a.createElement("div",{className:"advertising"},n.a.createElement("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ad-point red"},n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#FF4A4A"})),n.a.createElement("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ad-point yellow"},n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#FFB756"})),n.a.createElement("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ad-point pink"},n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#FFD0D0"})),"250 Pass per Week")))),n.a.createElement(M.a,{xs:"12"},n.a.createElement(A.a,{className:"d-flex justify-content-center card-actions"},n.a.createElement(M.a,{xs:"12",md:"4",lg:"3",className:"mb-3"},n.a.createElement(S.a,{color:"primary",size:"lg",block:!0},"Approve")," "),n.a.createElement(M.a,{xs:"12",md:"4",lg:"3",className:"mb-3"},n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",block:!0},"Claim")," "),n.a.createElement(M.a,{xs:"12",md:"4",lg:"3",className:"mb-3"},n.a.createElement(S.a,{outline:!0,color:"primary",size:"lg",block:!0},"Withdraw + Claim")," ")))))))}}var R=z;class W extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(V,null),n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/"},n.a.createElement(R,null))),n.a.createElement(T,null),n.a.createElement(O,null))}}var G=W,I=(t(90),t(91),Object(i.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),X=Object(s.a)();r.a.render(n.a.createElement(o.a,{store:I},n.a.createElement(m.b,{history:X},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",render:e=>n.a.createElement(G,e)})))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.20eda00a.chunk.js.map