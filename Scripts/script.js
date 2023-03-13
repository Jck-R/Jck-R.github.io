function show_page(page_name)
{
  var pages = document.querySelectorAll(".page")
  for (let page of pages)
  {
    if (page.id == page_name)
    {
      page.style.display='block'
      setTimeout(() => {
        page.style.opacity = 1
      }, 0);
    }
    else
    {
      page.style.display='none'
      page.style.opacity = 0.5
    }
  }
  var buttons = document.querySelectorAll(".button-menu")
  for (let button of buttons)
  {
    if (button.id == page_name)
    {
      button.style.fontWeight = 'bold'
    }
    else
    {
      button.style.fontWeight = '200'
    }
  }
}

show_page('about')