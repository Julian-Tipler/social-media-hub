/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Button, Flex, Text } from "@chakra-ui/react";

export function Meta() {
  const [imageUrl, setImageUrl] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [isSharingPost, setIsSharingPost] = useState(false);
  const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");

  /* --------------------------------------------------------
   *                      FACEBOOK LOGIN
   * --------------------------------------------------------
   */

  // Check if the user is authenticated with Facebook

  useEffect(() => {
    window.FB.getLoginStatus((response: any) => {
      setFacebookUserAccessToken(response.authResponse?.accessToken);
    });
  }, []);

  const logInToFB = () => {
    console.log("loginToFB");
    window.FB.login(
      (response: any) => {
        setFacebookUserAccessToken(response.authResponse?.accessToken);
      },
      {
        // Scopes that allow us to publish content to Instagram
        scope: "instagram_basic,pages_show_list",
      }
    );
  };

  // const logOutOfFB = () => {
  //   console.log("logOutOfFB");
  //   window.FB.logout(() => {
  //     setFacebookUserAccessToken(undefined);
  //   });
  // };

  /* --------------------------------------------------------
   *             INSTAGRAM AND FACEBOOK GRAPH APIs
   * --------------------------------------------------------
   */

  const getFacebookPages = () => {
    console.log("getFacebookPages");
    return new Promise((resolve) => {
      window.FB.api(
        "me/accounts",
        { access_token: facebookUserAccessToken },
        (response: any) => {
          resolve(response.data);
        }
      );
    });
  };

  const getInstagramAccountId = (facebookPageId) => {
    console.log("getInstagramAccountId");
    return new Promise((resolve) => {
      window.FB.api(
        facebookPageId,
        {
          access_token: facebookUserAccessToken,
          fields: "instagram_business_account",
        },
        (response: any) => {
          resolve(response.instagram_business_account.id);
        }
      );
    });
  };

  const createMediaObjectContainer = (instagramAccountId: string) => {
    console.log("createMediaObjectContainer");
    return new Promise((resolve) => {
      window.FB.api(
        `${instagramAccountId}/media`,
        "POST",
        {
          access_token: facebookUserAccessToken,
          image_url: imageUrl,
          caption: postCaption,
        },
        (response: any) => {
          resolve(response.id);
        }
      );
    });
  };

  const publishMediaObjectContainer = (
    instagramAccountId: string,
    mediaObjectContainerId: string
  ) => {
    console.log("publishMediaObjectContainer");
    return new Promise((resolve) => {
      window.FB.api(
        `${instagramAccountId}/media_publish`,
        "POST",
        {
          access_token: facebookUserAccessToken,
          creation_id: mediaObjectContainerId,
        },
        (response: any) => {
          resolve(response.id);
        }
      );
    });
  };

  const shareInstagramPost = async () => {
    console.log("shareInstagramPost");
    setIsSharingPost(true);
    const facebookPages: any = await getFacebookPages();
    const instagramAccountId: any = await getInstagramAccountId(
      facebookPages[0].id
    );
    const mediaObjectContainerId: any = await createMediaObjectContainer(
      instagramAccountId
    );

    await publishMediaObjectContainer(
      instagramAccountId,
      mediaObjectContainerId
    );

    setIsSharingPost(false);

    // Reset the form state
    setImageUrl("");
    setPostCaption("");
    return;
  };

  return (
    <Card>
      <main id="app-main">
        {facebookUserAccessToken ? (
          <Button bg={"brand.primary"}>Log out of Facebook</Button>
        ) : (
          <Button bg={"blue.400"} onClick={logInToFB}>
            Login with Facebook
          </Button>
        )}
        {facebookUserAccessToken ? (
          <Flex flexDirection={"column"}>
            <Text>2. Send a post to Instagram</Text>
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter a JPEG image url..."
            />
            <textarea
              value={postCaption}
              onChange={(e) => setPostCaption(e.target.value)}
              placeholder="Write a caption..."
              rows={10}
            />
            <Button
              onClick={shareInstagramPost as any}
              disabled={isSharingPost || !imageUrl}
            >
              {isSharingPost ? "Sharing..." : "Share"}
            </Button>
          </Flex>
        ) : null}
      </main>
    </Card>
  );
}
