import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Stack, Chip, Box } from '@material-ui/core';
import { CalendarToday } from '@material-ui/icons';

const EpisodeItem = (props) => {
  const { id, name, airDate, episode } = props;

  return (
    <Box>
      <Card sx={{ maxWidth: 280 }}>
        <Chip
          sx={{
            flexShrink: 1,
            position: 'absolute',
            color: 'red',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '2px',
          }}
          label={`#${id}`}
        />
        <Box
          sx={{
            height: 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url("/ram.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Typography variant="h3">{episode}</Typography>
        </Box>
        {/* <CardMedia sx={{ height: 180 }} image={null} title={name} alt={episode} /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {name}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
            justifyContent="space-between"
            spacing={2}
          >
            <Chip sx={{ flexShrink: 1 }} size="small" label={`#${id}`} />
            <Chip sx={{ flexShrink: 1 }} size="small" icon={<CalendarToday />} label={airDate} />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

EpisodeItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  episode: PropTypes.string,
  airDate: PropTypes.string,
};

export default EpisodeItem;
