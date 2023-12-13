

import { Button, Text } from "@gluestack-ui/themed";
import { Dialog } from "components/Dialog";
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

        <Dialog show={showAlertDialog} setShow={setShowAlertDialog} />

      </Layout>
    )
}