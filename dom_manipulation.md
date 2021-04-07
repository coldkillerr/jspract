DOM Selectors
--------------

## get elements in javascript from html document
- getElementsByTagName
- getElementsByClassName
- getElementById

## Select the elements
- querySelector
- querySelectorAll

## Changing attributes of elements
- getAttribute
- setAttribute

## Changing Styles
- style.{property} //ok ( try not to use )

- className //best (use with queryselector)
- classList //best (gets the list of css classes on the selected element)
- classList.add ( adds a class to the selected item )
- classList.remove ( removes a class from the selected item )
- classList.toggle ( toggles betwwen add and remove. best to be used for on and off situations )

## Bonus
innerHTML //DANGEROUS

- parentElement
- children

Example :
!['parentElement'](https://github.com/coldkillerr/jspract/blob/master/vlcsnap-2021-04-07-12h00m21s023.png)


##It is important to CACHE selectors in variables
