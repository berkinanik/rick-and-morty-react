import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Stack, Chip, Box } from '@material-ui/core';
import { Transgender, LocalHospital } from '@material-ui/icons';

const CharacterItem = (props) => {
  const { id, name, gender, status, image } = props;
  return (
    <Box>
      <Card sx={{ maxWidth: 320 }}>
        <Chip
          sx={{
            flexShrink: 1,
            position: 'absolute',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '2px',
          }}
          label={`#${id}`}
        />
        <Box sx={{ height: 280 }}>
          <CardMedia sx={{ height: '100%' }} image={image} title={name} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {name}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
            justifyContent="space-between"
            spacing={1}
          >
            <Chip sx={{ flexShrink: 1 }} size="small" icon={<Transgender />} label={gender} />
            <Chip
              sx={{ flexShrink: 1, textTransform: 'capitalize' }}
              size="small"
              icon={<LocalHospital />}
              label={status}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

CharacterItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterItem;
