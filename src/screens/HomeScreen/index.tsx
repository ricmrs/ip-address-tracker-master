import Box from "@/components/Box/Box";
import Icon from "@/components/Icon/Icon";
import InputGroup from "@/components/InputGroup";
import Text from "@/components/Text/Text";
import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { loadGeoIP } from "@/lib";
import { IConnection } from "@/interfaces/IConnection";
import useBreakpoints from "@/utils/mediaQueries/useBreakpoints";
import { validateIPInput } from "./utils/validateIPInput";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function HomeScreen({ connection } : { connection: IConnection} ) {
  const theme = useTheme();
  const [currentConnection, setCurrentConnection] = useState(connection);
  const [inputValue, setInputValue] = useState('');
  const { isLg } = useBreakpoints();
  const inputRef = useRef();
  const [inputValidity, setInputValidity] = useState(true)

  async function submitInputValue(){
    if(validateIPInput(inputValue, inputRef)) {
      const connection = await loadGeoIP(inputValue)
      setCurrentConnection(connection)
      setInputValidity(true)
      setInputValue('')
      return
    }
    setInputValidity(false)
    setInputValue('')
  }

  function handleEnterDown(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === 'Enter') {
      submitInputValue();
    }
  }

  const headingStyles = {
    textTransform: 'uppercase',
    color: theme.colors.neutral.x300
  }
  const infoStyles = {
    gap: '10px',
    alignItems: { xs: 'center', lg: 'flex-start' },
    width: { xs: 'auto', lg: '210px' },
    height: { xs: 'auto', lg: '75px' },
    borderRight: { xs: 'none', lg: `1px solid ${theme.colors.neutral.x200}` }
  }

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Box
        tag="main"
        styleSheet={{
          backgroundImage: { xs: 'url("./assets/pattern-bg-mobile.png")', lg: 'url("./assets/pattern-bg-desktop.png")' },
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
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
        <Box 
          styleSheet={{ gap: '40px', zIndex: '1', alignItems: 'center' }}>
          <InputGroup
            value={inputValue}
            ref={inputRef}
            inputValidity={inputValidity}
            placeholder={`${isLg ? 'Search for any IP address or domain' : 'Search for any IP address'}`}
            onChange={event => setInputValue(event.target.value)}
            onClick={submitInputValue}
            onEnterPressed={handleEnterDown}
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
                backgroundColor: theme.colors.neutral.x999,
              }
            }}
            inputStyle={{
              border: `1px solid ${theme.colors.neutral.x500}`,
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
              paddingHorizontal: '20px',
              paddingVertical: '15px',
              cursor: 'pointer',
              focus: {
                border: `3px solid ${theme.colors.neutral.x999}`,
              }
            }}
          >
            <Icon name="arrow" viewBox="-8 -4 24 24" />
          </InputGroup>
          <Box styleSheet={{
            backgroundColor: theme.colors.neutral.x000,
            paddingVertical: '30px',
            paddingHorizontal: { xs: '50px', lg: '40px' },
            gap: { xs: '25px', lg: '15px' },
            alignItems: { xs: 'center', lg: 'flex-start' },
            borderRadius: { xs: '5%', lg: '20px' },
            flexDirection: { xs: 'column', lg: 'row' }
          }}>
            <Info title="IP Address" info={currentConnection.ip} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="Location" info={`${currentConnection.location?.region}, ${currentConnection.location?.country}`} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="Timezone" info={`UTC ${currentConnection.location?.timezone}`} headingStyles={headingStyles} styleSheet={infoStyles} />
            <Info title="ISP" info={currentConnection.isp} headingStyles={headingStyles} styleSheet={{...infoStyles, borderRight: 'none'}} />
          </Box>
        </Box>
        <Box
          styleSheet={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: '0',
            top: { xs: '36%', lg: '21%', xl: '25%' },
          }}>
          <Map position={[connection.location?.lat, connection.location?.lng]}/>
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
