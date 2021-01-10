const WeatherListItem = () => {
  return (
    <a href="#" class="list-group-item list-group-item-action">
      Williamsburg Virginia
      <button
        type="button"
        className="btn btn-default"
        style={{ display: 'inline', float: 'right' }}
      >
        X
      </button>
    </a>
  );
};

export default WeatherListItem;
