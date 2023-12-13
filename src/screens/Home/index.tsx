

import { Button, Text } from "@gluestack-ui/themed";
import { WarningModal } from "components/Dialog";
import { Layout } from "components/Layout";
import { useState } from "react";

export function Home() {
    const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false)
    return (
      <Layout>
        <Text>Kit inicial</Text>
        <Button
            onPress={() => setShowAlertDialog(true)}
            mt="$4"
        >
            <Text color="$textLight0">Abrir alerta</Text>
        </Button>

        <WarningModal 
          show={showAlertDialog}
          setShow={setShowAlertDialog}
          title="Mensagem de alerta"
          message="Este é um exemplo de um AlertDialog aplicado a um componente."
          button={{
            title: "Apagar",
            action: () => setShowAlertDialog(false)
          }}
        />

      </Layout>
    )
}