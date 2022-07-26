import Proptypes from  'prop-types';

export const GifItem = ({title, url, id}) => {
    
  return (
    <div className="card">
        <img src={ url } alt= { title }/>
    </div>
  )
}

GifItem.Proptypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
}
