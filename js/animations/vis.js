function update_cell(x,y)
{
    // console.log(x);
    // console.log(y);
    window.setTimeout(function () {
        let no=x*box_no+y;
        cell[no-1].style.background="purple";
      }, (c_delay += delay_time));
}
function update_final(newX,newY)
{
  window.setTimeout(function () {
  cell[(newX-1)*box_no+newY-1].style.background="yellow";
}, (c_delay += delay_time));
}
function reconstruct()
{
  for(let i=0;i!=0;i=affa[affa[x_d][y_d]])
  {
    for(let j=0;j<affa[i].length;j++)
    {
      if(affa[i][j].length>1)
      {
        window.setTimeout(function () {
          let no=(affa[i][j][0])*box_no+affa[i][j][1];
          cell[no-1].style.background="yellow";
        }, (c_delay += delay_time));
      }

    }

  }
}