import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

export const Rightbar = () => {
  return (
    <Box
        flex={2}
        p={2}
        sx={{ display: { xs: "none", sm: "block" }} }>
          <Box position="fixed" width={300}>
            <Typography variant="h6" fontWeight={100} mb={2}>Online Friends</Typography>
            <AvatarGroup max={4} sx={{ justifyContent: "left" }}>
              <Avatar
                alt="Li Lee"
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Avatar
                alt="Zoé Dupont"
                src="https://images.pexels.com/photos/8494170/pexels-photo-8494170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Avatar
                alt="Maeva Guili"
                src="https://images.pexels.com/photos/11701101/pexels-photo-11701101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Avatar
                alt="Gwenaëlle Georges"
                src="https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Avatar
                alt="Yuri Manei"
                src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
              Latest Posts
            </Typography>
            <ImageList cols={3} gap={5} sx={{ cursor: "pointer" }}>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
                  alt="Basket Ball"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
                  alt="Bike"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
                  alt="Mushroom"
                />
              </ImageListItem>
            </ImageList>
            <Typography variant="h6" fontWeight={100} mt={2}>
              Latest Conversations
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Yuri Manei
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Gwenaëlle, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Li Lee
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
    </Box>
  )
}