<script>
import ContactUs from './ContactUs.svelte'
import Footer from './Footer.svelte'
import Campaign from './Campaign.svelte'
import HeroSection from './home/hero.svelte';
import KeyFeatures from './home/why-choose-us.svelte';
import AboutSection from './home/about.svelte';
import CaraMembantuSection from './home/how-to-help.svelte';
import ContactSection from './home/contact.svelte';
</script>

<style type="text/scss">

#notebook-paper {
  width: 100%;
  max-width:980px;
  height:5309px;
  background: linear-gradient(to bottom,white 31px,#00b0d7 1px);
  margin:0 auto;
  background-size: 100% 32px;
  position:relative;
  padding-top:150px;
  padding-left:44px;
  padding-right:12px;
  overflow:hidden;
  border-radius:5px;
  -webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -moz-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -ms-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -o-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  &:before {
    content:'';
    display:block;
    position:absolute;
    z-index:1;
    top:0;
    left:32px;
    height:100%;
    width:1px;
    background:#db4034;
  }
  header {
    height:150px;
    width:100%;
    background:white;
    position:absolute;
    top:0;
    left:0;
    h1 {
      padding:7.2rem 2rem 0 2.75rem;
    }
  }
  #content {
    margin-top:1.25rem;
    p {
      margin:0 0 30px 0;
    }

    img {
        margin: 0 auto;
    }
  }
}

@media (min-width: 768px) {
    #notebook-paper {
        padding-left:172px;
        padding-right:32px;

         &:before {
           left: 140px;
         }

         header {
            height:11rem;
             h1 {
                 padding:9rem 2rem 0 10.75rem;
             }
         }

         #content {
             margin-top: 3.125rem;
         }
    }
}
</style>


<div id="notebook-paper">
  <header>
    <img class="img-hero" src="images/photo__hello.png" alt="hello from us!" width="503"/>
  </header>
  <div id="content">
    <div class="hipsum">
      <HeroSection />
      <KeyFeatures />
      <CaraMembantuSection />
      <ContactSection />
       <Campaign />
    </div>
  </div>
  <Footer />
</div>

