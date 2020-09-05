import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TopArtistList = ({artists}) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <Accordion key={`artist${index}`} variant='outlined'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            style={{ flex: 1, margin: '0 20px 0 0' }}
          >
            <Typography>{artist.name}</Typography>
          </AccordionSummary>
          {artist.genres.length > 0 && (
            <AccordionDetails style={{padding: '8px 16px'}}>
              <Typography variant='body2'>
                <div className='accordion-div'>
                  <li className='accordion-li li'><b>Genres: </b></li>
                  <li className='accordion-li2 li'>{artist.genres.join(', ')}</li>
                </div>
              </Typography>
            </AccordionDetails>
          )}
          <AccordionDetails>
            <Typography variant='body2'>
              <div className='accordion-div'>
                  <li className='accordion-li li'><b>Popularity Rating:</b></li>
                  <li className='accordion-li2 li'>{artist.popularity}</li>
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TopArtistList;
