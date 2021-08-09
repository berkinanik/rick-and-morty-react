import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Stack, Chip, Box } from '@material-ui/core';
import { Transgender, AssignmentInd, LocalHospital } from '@material-ui/icons';

const CharacterItem = (props) => {
  const { id, name, gender, status, image } = props;
  return (
    <Box>
      <Card sx={{ maxWidth: 280 }}>
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
            <Chip sx={{ flexShrink: 1 }} size="small" icon={<AssignmentInd />} label={`#${id}`} />
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
  id: PropTypes.number,
  name: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterItem;
