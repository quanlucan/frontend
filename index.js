import React from 'react';
import reactDom from 'react-dom'
import Index from './page/index';
import Ano from './page/ano';


reactDom.render(
    <div>
        <Index />
        <Ano/>
    </div>
   ,
    document.getElementById("app")
)   

