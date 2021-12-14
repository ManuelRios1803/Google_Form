import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question_form from './Question_form';
import { IconButton } from '@material-ui/core'
import Theme from "./Themes/Themes";
import MoreVertIcon from '@material-ui/icons/MoreVert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (

        <div>{children}</div>

      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Centeredtabs() {
  const colors = Theme(localStorage.getItem("palette"));
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    tab: {
      fontSize: 12,
      color: colors.words_color,
      textTransform: "capitalize",
      height: 10,
      fontWeight: "600",
      fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs: {
      height: 10
    }
  })
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper style={{ backgroundColor: colors.background_color }} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor={colors.words_color}
        centered
        className={classes.tabs}
        TabIndicatorProps={{
          style: { background: colors.words_color }
        }}
      >
        <Tab label="Preguntas" className={classes.tab} {...a11yProps(0)} />
        <Tab label="Respuestas" className={classes.tab} {...a11yProps(1)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Question_form />


      </TabPanel>
      <TabPanel value={value} index={1} >
        <div className="submit" style={{ height: "76vh" }}  >
          <div style={{ backgroundColor: colors.background_color }} className="user_form" >
            <div className="user_form_section">
              <div className="user_form_questions" style={{ display: "flex", flexDirection: "column", marginBottom: "20px", backgroundColor: colors.form_background_color, color: colors.words_color }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px", fontSize: "24px" }} >Respuestas</Typography>
                  <div><IconButton>
                    <MoreVertIcon className="form_header_icon" />
                  </IconButton>
                  </div>
                </div>
                <br></br>
                <div style={{ marginBottom: "5px" }}>
                  <div style={{ display: 'flex', fontSize: "12px", justifyContent: "flex-end" }}>
                    Aceptar respuestas  <Switch color="primary" size="small" />
                  </div>
                </div>

              </div>




            </div>

          </div>
        </div>
      </TabPanel>
    </Paper >
  );
}

export default Centeredtabs