"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // détecte la page actuelle

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const menuItems = [
    { text: "Accueil", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Tarifs", href: "/tarifs" },
  ];

  // Fonction pour le bouton "Contact"
  const getContactLink = () =>
    pathname === "/" ? "#contact" : "/#contact";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "#545454",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
          px: { xs: 2, md: 8 },
        }}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="GMZ Services"
            width={80}
            height={80}
            style={{ height: "auto", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* MENU DESKTOP */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            gap: 4,
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="text-lg hover:text-gray-600 transition-colors"
            >
              {item.text}
            </Link>
          ))}
        </Box>

        {/* CTA Contact (desktop) */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link href={getContactLink()} scroll={true}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#545454",
                color: "white",
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>

        {/* MENU MOBILE */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "#545454" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer mobile */}
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { backgroundColor: "#f9f9f9", width: 260 },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      color: "#545454",
                      textAlign: "center",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </ListItem>
            ))}

            {/* CTA Contact Mobile */}
            <ListItem
              component={Link}
              href={getContactLink()}
              onClick={toggleDrawer(false)}
              sx={{ justifyContent: "center", mt: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#545454",
                  color: "white",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  px: 3,
                  py: 1,
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                Contact
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
