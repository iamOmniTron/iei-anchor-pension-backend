const chalk = require("chalk");
const Showcase = require("../models").Showcase;
const Hero = require("../models").Hero;
const CallToAction = require("../models").CallToAction;
const Service = require("../models").Service;
const Info = require("../models").Info;
const Review = require("../models").Review;
const Admin = require("../models").Admin;
const {hash} = require("bcrypt");


const seedAdmin = async()=>{
    try{
        const data = {
            email:"admin@anchorpension.com",
            password: await hash("super_admin",10)
        };
        await Admin.create({...data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedHero = async()=>{
    try{
        const data = {
            bgImage:"hero-bg.jpg",

            headline:"Your story starts with us",
            subText:"we care about your later future that's why we help build it today"
        }
        await Hero.create({...data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedCTA = async ()=>{
    try{
        const data = {
            title:"patnering for a better retirement",
            paragraph1:"Our strategies meet your needs according to PENCOM guidelines and Investment management policy.",
            paragraph2:"Enjoy the convenience of monitoring your RSA account anywhere and anytime by using our online statement. Sign up today",
            ctaLinkTitle:"Register with Us",
            ctaLink:"/register",
            sectionHeadline:"Investment Portfolio",
            sectionImage:"",
            sectionParagraph:"Ensure the profitability on your funds as you let us help you get the best rate of return on your investments."
        }
        await CallToAction.create({...data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedServices = async ()=>{
    try{
        const service1Data = {
            thumbnail:'',
            href:'/',
            linkTitle:'Retirement Income',
            paragraphText:'Invest your hard-earned savings so you and your family can ultimately achieve your long term lifestyle goals.'
        }

        const service2Data = {
            thumbnail:'',
            href:'/',
            linkTitle:'Rate of Return',
            paragraphText:'Manage your contributions effectively and efficiently by checking your rate of return. Learn responsible investment best practices.'
        }
        const service3Data = {
            thumbnail:'',
            href:'/',
            linkTitle:'Pension Calculator',
            paragraphText:'Plan your retirement wisely. Set a target and use our Pension Calculator to determine your required savings to achieve your target.'
        }
        await Service.create({...service1Data});
        await Service.create({...service2Data});
        await Service.create({...service3Data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedInfo = async ()=>{
    try{
        const data = {
            headline:"IEI Anchor Pensions MOBILE",
            text:"IEI Anchor Pensions mobile is an easy to use application from IEI Anchor Pensions designed to give clients quick access to their retirement savings account information. ",
            image:"anchor-app.png"
        }
        await Info.create({...data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedReview = async ()=>{
    try{
        const data1 = {
           reviewer:"Abdul mumeen",
           review:"A Great scheme",
           occupation:"Senior Software Developer"
        };

        const data2 = {
            reviewer:"Aliyu Musa",
            review:"Pension is very important",
            occupation:"Chartered Accountant"
        };

        const data3 = {
            reviewer:"Abyaz Musa",
            review:"IEI Pension the best",
            occupation:"Doctor"
        };
        
        await Review.create({...data1});
        await Review.create({...data2});
        await Review.create({...data3});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

const seedShowcase = async ()=>{
    try{
        const data = {
            headline:"We offer services that work",
            item1Title:"Excellent Services",
            item1Image:"",
            item1Subtext:"NAICO's Best PFA of the Year 2017",
            item2Title:"Recognition",
            item2Image:"",
            item2Subtext:"Fastet growing PFA in Nigeria",
            item3Title:"Awards",
            item3Image:"",
            item3Subtext:"Best PFA of the year 2016 & 2017"
        }

        await Showcase.create({...data});
    }catch(err){
        console.log(chalk.red('Error:',err.message))
    }
}

module.exports = async function seedDB(){
    await Promise.all([seedAdmin(),seedHero(),seedServices(),seedCTA(),seedInfo(),seedReview(),seedShowcase()]);
}