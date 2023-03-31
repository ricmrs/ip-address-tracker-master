import Box from "@/components/Box/Box";
import Icon from "@/components/Icon/Icon";
import InputGroup from "@/components/InputGroup";
import Text from "@/components/Text/Text";
import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { loadIP } from "@/lib";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function HomeScreen({ ip, location, timezone, isp }: { ip: string, location: string, timezone: string, isp: string }) {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');

  async function submitInputValue(){
    const ip = await loadIP(inputValue)
    console.log('ip', ip)
    setInputValue('');
  }

  const headingStyles = {
    textTransform: 'uppercase',
    color: theme.colors.neutral.x300
  }
  const infoStyles = {
    gap: '10px',
    alignItems: 'center'
  }

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Box
        tag="main"
        styleSheet={{
          backgroundImage: { xs: 'url("./assets/pattern-bg-mobile.png")' },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          flex: 1,
          alignItems: 'center',
          height: '50%',
          paddingTop: '50px',
          paddingBottom: '20px',
          gap: '35px',
          position: 'relative'
        }}
      >
        <Text tag="h1" variant="heading1" styleSheet={{ color: theme.colors.neutral.x000 }}>IP Address Tracker</Text>
        <Box styleSheet={{ gap: '40px', zIndex: '1' }}>
          <InputGroup
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onClick={submitInputValue}
            buttonStyle={{
              backgroundColor: theme.colors.neutral.x999,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px',
              hover: {
                backgroundColor: theme.colors.neutral.x500
              },
              focus: {
                backgroundColor: theme.colors.neutral.x999
              }
            }}
            inputStyle={{
              border: `1px solid ${theme.colors.neutral.x500}`,
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
              paddingHorizontal: '20px',
              paddingVertical: '15px'
            }}
          >
            <Icon name="arrow" viewBox="-8 -4 24 24" />
          </InputGroup>
          <Box styleSheet={{
            backgroundColor: theme.colors.neutral.x000,
            alignItems: 'center',
            paddingVertical: '30px',
            paddingHorizontal: '50px',
            borderRadius: '5%',
            gap: '25px'
          }}>
            <Info title="IP Address" info={ip} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="Location" info={location} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="Timezone" info={timezone} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="ISP" info={isp} headingStyles={headingStyles} styleSheet={infoStyles} />
          </Box>
        </Box>
        <Box
          styleSheet={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '38%',
            zIndex: '0'
          }}>
          <Map />
        </Box>
      </Box>
    </>
  )
}

interface InfoProps {
  title: string;
  info: string;
  headingStyles: StyleSheet;
  styleSheet?: StyleSheet;
}

function Info({ title, info, headingStyles, ...props }: InfoProps) {
  return (
    <BaseComponent {...props}>
      <Text tag="h2" variant="heading4" styleSheet={headingStyles}>{title}</Text>
      <Text tag="h3" variant="heading2">{info}</Text>
    </BaseComponent>
  )
}
