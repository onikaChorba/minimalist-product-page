import React, { useState, useEffect } from "react";
import "@radix-ui/themes/styles.css";
import { Button, Heading, TabNav, Flex } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header style={headerStyle}>
      <Flex align="center" justify="between" style={{ width: "100%" }}>
        <Heading as="h1" style={{ margin: 0 }}>
          Belleza
        </Heading>
        {!isMobile && (
          <div style={desktopNavStyle}>
            <TabNav.Root color="indigo">
              <TabNav.Link href="#" active>
                Products
              </TabNav.Link>
              <TabNav.Link href="#">Contact</TabNav.Link>
              <TabNav.Link href="#">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <Button variant="ghost">More Options</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content style={dropdownStyle}>
                    <DropdownMenu.Item asChild>
                      <Link href="/about" style={dropdownItemStyle}>
                        About Us
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/faq" style={dropdownItemStyle}>
                        FAQ
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </TabNav.Link>
            </TabNav.Root>
          </div>
        )}
        {isMobile ? (
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            style={mobileButtonStyle}
            aria-label="Toggle menu"
          >
            {isOpen ? "x" : "☰"}
          </Button>
        ) : null}
      </Flex>

      {isMobile && isOpen && (
        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
          <Collapsible.Content style={mobileNavStyle}>
            <TabNav.Root color="indigo">
              <TabNav.Link href="#" active>
                Products
              </TabNav.Link>
              <TabNav.Link href="#">Contact</TabNav.Link>
              <TabNav.Link href="#">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <Button variant="ghost">More Options</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content style={dropdownStyle}>
                    <DropdownMenu.Item asChild>
                      <Link href="/about" style={dropdownItemStyle}>
                        About Us
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/faq" style={dropdownItemStyle}>
                        FAQ
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </TabNav.Link>
            </TabNav.Root>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </header>
  );
};

const headerStyle = {
  padding: "20px 40px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const desktopNavStyle = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  justifyContent: "center",
};

const mobileButtonStyle = {
  display: "block",
};

const dropdownStyle = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  zIndex: 1000,
  minWidth: "120px",
};

const dropdownItemStyle = {
  textDecoration: "none",
  color: "black",
  display: "block",
  padding: "5px 10px",
  transition: "background 0.3s ease",
  borderRadius: "3px",
};

const mobileNavStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10px 0",
  gap: "10px",
};

export default Header;
