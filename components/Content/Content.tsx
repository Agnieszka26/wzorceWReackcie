import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
export interface IContent {}

const Content: React.FC<IContent> = () => {
  const greetings = 'Hello there!';
  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Typography variant="h6">{greetings}</Typography>
    </Grid>
  );
};

export default Content;
