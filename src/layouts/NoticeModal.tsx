import { useQuery } from "@tanstack/react-query";
import { Terms } from "../types/global";
import { getTerms } from "../apis";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { columnBox, rowBox } from "../styles/common.styled";
import Spacing from "../components/ui/Spacing";
import { useStore } from "zustand";
import { modalStore } from "../store";
import closeIcon from "../assets/icons/ic_close.svg";
import arrowIcon from "../assets/icons/ic_arrow.svg";

interface NoticeModalProps {
  type: Terms;
}

const termsString = {
  STARTADMIN_ADMIN_PRIVACY: "개인정보 처리방침",
  JOIN_SERVICE_USE: "이용약관",
};

const NoticeModal = ({ type }: NoticeModalProps) => {
  const { closeModal } = useStore(modalStore);
  const { data, isLoading, isError } = useQuery({
    queryKey: [type],
    queryFn: () => getTerms(type),
  });
  const [selectedVersion, setSelectedVersion] = useState<number | null>(null);

  useEffect(() => {
    if (data && data[0]) setSelectedVersion(data[0].termsVersion);
  }, [data]);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const version = parseInt(event.target.value, 10);
    setSelectedVersion(version);
  };

  const selectedContent = data?.find(
    (item: any) => item.termsVersion === selectedVersion
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;
  return (
    <ModalContainer>
      <Header>
        <span
          style={{ fontSize: "24px", fontWeight: "bold", margin: "1rem 0" }}
        >
          {termsString[type]}
        </span>
        <CloseButton src={closeIcon} onClick={() => closeModal()} />
      </Header>
      <Spacing size={16} />
      <Content>
        <Dropdown $icon={arrowIcon}>
          <select onChange={handleVersionChange}>
            {data.map((item: any) => (
              <option key={item.termsVersion} value={item.termsVersion}>
                {new Date(
                  new Date(item.startDate).setDate(
                    new Date(item.startDate).getDate() + 1
                  )
                )
                  .toISOString()
                  .slice(0, 10)
                  .split("-")
                  .join(".")}
                &nbsp;~&nbsp;
                {item.endDate
                  ? new Date(item.endDate)
                      .toISOString()
                      .slice(0, 10)
                      .split("-")
                      .join(".")
                  : "현재"}
              </option>
            ))}
          </select>
        </Dropdown>
        {selectedContent && (
          <Desciption
            dangerouslySetInnerHTML={{ __html: selectedContent.contents }}
          />
        )}
      </Content>
    </ModalContainer>
  );
};

export default NoticeModal;

const ModalContainer = styled.div`
  width: var(--board-media-max-width);
  background: white;
  padding: 0 40px;
  overflow-y: auto;

  @media (max-width: 1440px) {
    padding: 0 32px;
  }
  @media (max-width: 1060px) {
    padding: 0 20px;
  }
`;

const Header = styled.div`
  ${rowBox}
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-bottom: 2px solid var(--midnight-900);
`;

const CloseButton = styled.img`
  cursor: pointer;
`;

const Content = styled.div`
  ${columnBox}
`;

const Dropdown = styled.div<{ $icon: any }>`
  display: flex;
  justify-content: flex-end;

  select {
    background: url(${(props) => props.$icon}) no-repeat right
      calc(var(--space-sm2) * 0.6) top 50%;
    background-size: auto calc(var(--input-md) * 0.42);
    height: var(--input-md);
    font-size: var(--input-md-fsize);
    padding: 0 var(--space-sm2);
    padding-right: var(--input-md);
    margin-bottom: 12px;
    border: 1px solid #ccc;
    appearance: none;

    @media (max-width: 1060px) {
      width: 100%;
    }
  }
`;

const Desciption = styled.div`
  ${columnBox};
  width: 100%;

  table {
  }

  * {
    line-height: var(--line-height-sm);
    margin: 0;
    width: 100%;
    max-width: 100%;
    word-break: break-all;

    table {
      table-layout: fixed;
    }

    @media (max-width: 743px) {
      font-size: 12px !important;

      table {
        font-size: 10px !important;
      }
    }

    @media (min-width: 744px) and (max-width: 1439px) {
      font-size: 14px !important;
    }

    @media (min-width: 1440px) {
      font-size: 16px !important;
    }
  }
`;
