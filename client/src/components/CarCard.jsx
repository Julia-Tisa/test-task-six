import PropTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import Timer from './Timer';

function CarCard({
  title, imgUrl, finishTime, bid,
}) {
  const finishDate = new Date(finishTime).toLocaleString();
  const fullImgUrl = process.env.CONFIG.IMAGES_BASEPATH + imgUrl;

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={fullImgUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ставка:
          {' '}
          {bid > 0 ? `${bid}000` : bid}
          {' '}
          ₽
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Дата окончания аукциона:
          {' '}
          {finishDate}
        </Typography>
        <Timer finishTime={finishTime} />
      </CardContent>
    </Card>
  );
}

CarCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  finishTime: PropTypes.number.isRequired,
  bid: PropTypes.number.isRequired,
};

export default CarCard;
