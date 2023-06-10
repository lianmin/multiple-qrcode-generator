import { useState } from 'react';
import { definePageConfig } from 'ice';
import { Page, Section, Block, Grid, Cell, P, Text } from '@alifd/layout';
import { Balloon, Input, Form } from '@alifd/next';
import { Panel } from '@icedesign/qrcode';

import styles from './index.module.css';

export default function Home() {
  const [textList, setTextList] = useState<string[]>([]);

  const handleSubmit = (values, errors) => {
    if (!errors) {
      const { text } = values;
      if (text) {
        const arr = text.split(/\n|,|\s/);
        let tail: string[] = [];

        const quotient = arr.length % 5;

        if (quotient !== 0) {
          tail = new Array(5 - quotient).fill('');
        }

        setTextList([...arr, ...tail]);
      }
    }
  };

  return (
    <Page breakPoints={[{ maxContentWidth: 1200, width: Infinity, numberOfColumns: 12 }]}>
      <Section>
        <Block title="请输入需要转换的文本">
          <Form>
            <Form.Item name="text" required requiredMessage="请输入必要的文本">
              <Input.TextArea
                className={styles.textarea}
                rows={8}
                maxLength={5000}
                showLimitHint
                placeholder="输入或粘贴需要生成二维码的文本，支持通过换行符、空格、英文逗号分隔"
              />
            </Form.Item>
            <P hasVerSpacing={false}>
              <Form.Submit type="primary" validate onClick={handleSubmit}>
                生成
              </Form.Submit>
              <Form.Reset type="secondary" onClick={() => setTextList([])}>
                清空
              </Form.Reset>
            </P>
          </Form>
        </Block>
        <Block title="生成结果">
          <Grid x-if={textList.length} className={styles.grid} cols={5} rowGap={1} colGap={1}>
            {textList.map((text, index) => (
              <Cell
                key={`qr-${index}`}
                className={styles.gridCell}
                verAlign="middle"
                align="center"
              >
                <Balloon.Tooltip
                  x-if={text}
                  align="t"
                  trigger={<Panel className={styles.panel} value={text} text={`${index + 1}`} />}
                  triggerType="hover"
                >
                  <Text type="body2">{text}</Text>
                </Balloon.Tooltip>
              </Cell>
            ))}
          </Grid>
          <Cell x-else height={200} verAlign="middle" align="center">
            <P>
              <Text>无结果</Text>
            </P>
          </Cell>
        </Block>
      </Section>
    </Page>
  );
}

export const pageConfig = definePageConfig({
  title: '二维码批量生成器',
});
