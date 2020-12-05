var Para = {P_tag:function(color){
                var ptag = document.querySelectorAll('p');
                var i = 0;
                while (i<ptag.length) {
                ptag[i].style.color = color;
                i = i+1
                }
              },


           Md_line:function(color){
           var h2tag = document.querySelectorAll('h2');
           var i = 0;
           while(i<h2tag.length){
           h2tag[i].style.color = color;
            i = i+1
            }
              },


            Main:function(color){document.querySelector('a').style.color = color;},

            Bg_Color:function(color){document.querySelector('body').style.backgroundColor = color;}


}



    Night_Mode = function(self){
      if (self.value === 'night'){
        Para.Main('white')
        Para.Bg_Color('#151617')
        Para.Md_line('white')
        Para.P_tag('white');
        self.value = 'day';
      }
      else{
        Para.Main('#10427D')
        Para.Bg_Color('white')
        Para.Md_line('black')
        Para.P_tag('black');
        self.value = 'night';
      }
    }
