import spin from './scrollFunc.js';
import { useHistory } from "react-router-dom";
import {useEffect} from 'react';

const Squares = (props)=>{
	return(
		<>
		<span className="sq trans-1 fade-1 z-bg sq-xs sq-rm bg-grad-tl"></span>
		<span className="sq trans-1 fade-1 z-bg sq-s sq-rb bg-grad-tr"></span>
		<span className="sq trans-1 fade-1 z-bg sq-l sq-rt bg-grad-tl"></span>
		<span className="sq trans-1 fade-1 z-bg sq-m sq-lt bg-grad-tr"></span>
		<span className="sq trans-1 fade-1 z-bg sq-xs sq-lm bg-grad-tl"></span>
		<span className="sq trans-1 fade-1 z-bg sq-xl sq-lb bg-grad-tr"></span>			
		</>
	)
}

export default Squares;

export const Glass = (props)=>{
  const history = useHistory();

	const load = ()=>{
		history.push("/main")
	}

	return(
		<div className="h-100 w-100 bg-pop z-main flx flx-jc-ce flx-ai-ce lh-norm fade-t">
			<div className="flx flx-col flx-jc-ce flx-ai-ce p-20 h-80 w-50 bg-glass bg-glassb br-50 txt-clr-wht " id="popUpMes">

				<h4 className="mont-bold">Your Secret Gift is waiting</h4>
				<p className="mont-reg m-t-2">3 spins</p>
				<h1 className="txt-al-ce mont-bold w-50 m-t-2">Win up to <span className="txt-clr-csh">C$1,000</span></h1>
				<p className="mont-reg txt-clr-spn m-t-2">+40 Bonus spins</p>
				<img className="svgImg" src="./svg/trophy.svg" alt="trophy"/>

				{/*Fix me later*/}
				<button className="flx flx-ai-ce flx-jc-ce txt-al-ce mont-bold bg-btn-spn br-50 p-15 w-30 trans-05 txt-clr-wht m-t-2 ovr-hide" onClick={load}>SPIN NOW</button>

			</div>
		</div>
	)
}

export const Win = ()=>{

  const history = useHistory();

	return(
		<div className="h-100 w-100 bg-pop z-main flx flx-jc-ce flx-ai-ce lh-norm fade-t">
			<div className="flx flx-col flx-jc-ce flx-ai-ce p-20 h-80 w-50 bg-glass bg-glassb br-50 txt-clr-wht " id="popUpMes">

				<h4 className="mont-bold">CONGRATULATIONS!</h4>
				<p className="mont-reg m-t-2">You just won our biggest welcome bonus of</p>
				<h1 className="txt-al-ce mont-bold w-50 m-t-2 txt-clr-csh">C$1,000</h1>
				<p className="mont-reg txt-clr-spn m-t-2">+40 Bonus spins</p>
				<img className="svgImg" src="./svg/winning.svg" alt="winning"/>

				{/*Fix me later*/}
				<button className="flx flx-ai-ce flx-jc-ce txt-al-ce mont-bold bg-btn-cng br-50 p-15 w-30 trans-05 txt-clr-wht m-t-2 ovr-hide">COUNTINUE</button>

			</div>
		</div>
	)	
}

/* Roulette items */
const items = [
	{
		alt:"lemon",
		src:"./svg/Lemon.svg"
	},
	{
		alt:"cherry",
		src:"./svg/Cherry.svg"
	},
	{
		alt:"money",
		src:"./svg/Money.svg"
	},
	{
		alt:"bar",
		src:"./svg/Bar.svg"
	}
]

const Stat = (props)=>{
	return(
		<header className="flx flx-jc-ce flx-ai-ce w-80 m-b-2">
			<h4 className="mont-reg txt-clr-wht">Balance: $20</h4>
			<p className="mont-reg txt-clr-wht m-l-auto">Spins left : {props.ctr}</p>
		</header>
	)
}

const Item = (prop)=>{
	return(
	<span className={`container flx flx-col flx-jc-ce flx-ai-ce p-20 br-50 h-cust w-30 bg-wht ovr-hide trans-05 ${prop.class}`}>
		<div className="w-100 ovr-scr-y scrbar spin scr-snp">
			{items.map((elem,ndx)=>(
				<div key={ndx} className="cont m-t-2 m-b-2 scr-algn h-100 w-100">
					<img src={elem.src} alt={elem.alt} className={`${elem.alt} roulImg `}/>
				</div>
			))}		
		</div>
	</span>		
	)
}

const Roulette = ()=>{
	return(
		<div className="w-100 flx flx-jc-sp flx-ai-ce roulette">
			<Item/>
			<Item class={'m-r-2 m-l-2'}/>
			<Item/>
		</div>
	)
}

const Side = ()=>{
	return(
		<div className="flx flx-col flx-jc-ce flx-ai-ce p-20 side">
			<img src="./svg/card.svg" alt="card" className="card"/>
			<h1 className="txt-al-ce txt-clr-wht mont-bold m-t-5">Win up to <span className="txt-clr-csh">C$1,000</span></h1>
			<p className="mont-reg txt-clr-spn m-t-5">+40 Bonus spins</p>
		</div>
	)
}

export const Main = (props)=>{
	const {upd,ctr} = props;
	 const history = useHistory();

	useEffect(()=>{
		spin();
	})

	const click = ()=>{
		if(ctr>1){
			upd(ctr-1);
			spin();
		}else{
			spin(true)
			setTimeout(()=>{
				history.push('/win')
			},1000)
		}
		
	}

	return(
		<main className="flx flx-jc-sp flx-ai-ce h-100 w-100 p-20 z-main fade-1">
			<section className="flx flx-jc-ce flx-ai-ce p-20 br-50 bg-glassb h-80 w-100 fade-l">
				<div className="flx flx-col flx-jc-ce flx-ai-ce bg-glass br-50 p-20 h-90 w-100">
					<Stat ctr={ctr}/>
					<Roulette/>
					<button className="flx flx-ai-ce flx-jc-ce txt-al-ce mont-bold bg-btn-spn br-50 p-15 w-30 trans-05 txt-clr-wht ovr-hide m-t-2" onClick={click}>SPIN NOW</button>
				</div>			
			</section>

			<aside className="p-20 br-50 bg-glassb m-l-2 fade-r flx flx-ai-ce flx-jc-ce h-60">	
				<div className="flx flx-col flx-jc-ce flx-ai-ce h-50 w-20 p-20 bg-glass br-50 h-80">
					<Side/>
				</div>		
			</aside>		

		</main>
	)
}

export const Mobile =(props)=>{

	const {upd,ctr} = props;
	 const history = useHistory();

	useEffect(()=>{
		spin();
	})

	const click = ()=>{
		if(ctr>1){
			upd(ctr-1);
			spin();
		}else{
			spin(true)
			setTimeout(()=>{
				history.push('/win')
			},1000)
		}
		
	}

	return(
		<main className="flx flx-jc-sp flx-ai-ce h-100 w-100 p-20 z-main fade-1">
			<section className="flx flx-col flx-jc-ce flx-ai-ce p-20 br-50 bg-glassb bg-glass h-80 w-auto m-0 fade-l">
					<Side/>
					<Roulette/>
					<Stat ctr={ctr}/>
					<button className="flx flx-ai-ce flx-jc-ce txt-al-ce mont-bold bg-btn-spn br-50 p-15 w-30 trans-05 txt-clr-wht ovr-hide m-t-2" onClick={click}>SPIN NOW</button>		
			</section>
		</main>
	)
}